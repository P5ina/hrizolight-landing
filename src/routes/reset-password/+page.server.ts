import { error, fail } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email({
		message: 'Некорректный email адрес'
	})
});

export const load = async () => {
	const form = await superValidate(zod(schema));
	return {
		form
	};
};

export const actions = {
	default: async ({ locals, request }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.pb.collection('users').requestPasswordReset(form.data.email);
		} catch (e) {
			console.error('Error signing in:', e);
			if (e instanceof ClientResponseError) {
				console.log('Response:', e.response);
				return setError(form, 'email', 'Некорректный email адрес');
			}
			return error(500, 'Ошибка восстановления пароля');
		}
	}
};
