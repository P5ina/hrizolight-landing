import prisma from '$lib/prisma';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(formSchema)
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const { nickname, reason } = form.data;
		const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${nickname}`);
		const accountInfo = await res.json();

		if (!accountInfo.name || accountInfo.demo === true) {
			return setError(form, 'nickname', 'Игрок не найден');
		}

		const whitelistRequest = await prisma.whitelistRequest.findFirst({
			where: {
				nickname: accountInfo.name
			}
		});
		if (whitelistRequest) {
			return setError(form, 'nickname', 'Заявка с таким ником уже существует');
		}

		try {
			await prisma.whitelistRequest.create({
				data: {
					nickname: accountInfo.name,
					reason
				}
			});
		} catch (e) {
			if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002') {
				return setError(form, 'nickname', 'Заявка с таким ником уже существует');
			}
		}
		return { form };
	}
} satisfies Actions;
