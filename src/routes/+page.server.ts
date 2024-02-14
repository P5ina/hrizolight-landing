import prisma from '$lib/prisma';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(formSchema)
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const nickname = data.get('nickname');
		const reason = data.get('reason');

		if (!nickname) {
			return fail(400, { nickname, reason, missing: true });
		}

		if (typeof nickname !== 'string' || typeof reason !== 'string') {
			return fail(400, { nickname, reason, invalid: true });
		}

		const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${nickname}`);
		const accountInfo = await res.json();

		if (!accountInfo.name || accountInfo.demo === true) {
			return fail(400, { nickname, reason, accountDoesntExists: true });
		}

		await prisma.whitelistRequest.create({
			data: {
				nickname: accountInfo.name,
				reason
			}
		});
		return { success: true };
	}
} satisfies Actions;
