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
	withEmail: async ({ locals, url, request }) => {
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
				if (e.response.message === 'Failed to authenticate.') {
					setError(form, 'email', 'Некорректный email адрес или пароль');
					return setError(form, 'password', 'Некорректный email адрес или пароль');
				}
			}
			return error(500, 'Неизвестная ошибка авторизации');
		}

		if (!locals.pb.authStore.model?.verified) {
			return setError(form, 'email', 'Email не подтвержден');
		}

		const redirectRoute = url.searchParams.get('redirect') || '/profile';
		redirect(303, redirectRoute);
	},
	google: async ({ locals }) => {
		try {
			await locals.pb.collection('users').authWithOAuth2({ provider: 'google' });
		} catch (e) {
			console.error('Error signing in with Google:', e);
			if (e instanceof ClientResponseError) {
				console.log('Response:', e.response);
			}
			return error(500, 'Неизвестная ошибка авторизации');
		}
	}
};
