import { error, fail, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email({
		message: 'Некорректный email адрес'
	}),
	password: z.string().min(8, {
		message: 'Пароль должен быть не менее 8 символов'
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
			await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (e) {
			console.error('Error signing in:', e);
			if (e instanceof ClientResponseError) {
				console.log('Response:', e.response);
				setError(form, 'email', 'Некорректный email адрес или пароль');
				return setError(form, 'password', 'Некорректный email адрес или пароль');
			}
			return error(500, 'Неизвестная ошибка авторизации');
		}

		redirect(303, '/profile');
	}
};
