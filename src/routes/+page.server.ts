import prisma from '$lib/prisma';
import { fail, type Actions } from '@sveltejs/kit';

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

		await prisma.whitelistRequest.create({
			data: {
				nickname,
				reason
			}
		});
		return { success: true };
	}
} satisfies Actions;
