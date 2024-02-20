import { error, fail, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	nickname: z.string().min(1, {
		message: 'Никнейм обязателен для заполнения'
	}),
	email: z.string().email({
		message: 'Некорректный email адрес'
	}),
	password: z.string().min(8, {
		message: 'Пароль должен быть не менее 8 символов'
	}),
	passwordConfirm: z.string().min(8, {
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
		console.log('Started registration process...');
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			console.log('Form is invalid!');
			return fail(400, { form });
		}

		if (form.data.password !== form.data.passwordConfirm) {
			console.log('Passwords do not match!');
			return setError(form, 'passwordConfirm', 'Пароли не совпадают');
		}

		try {
			console.log('Creating user...');
			await locals.pb.collection('users').create({ ...form.data });
			await locals.pb.collection('users').requestVerification(form.data.email);
			console.log('User created!');
		} catch (e) {
			console.error('Error creating user:', e);
			if (e instanceof ClientResponseError) {
				console.log('response:', e.response);
				if (e.response.data.email.code === 'validation_invalid_email') {
					return setError(
						form,
						'email',
						'Некорректный email адрес или пользователь с таким email уже существует'
					);
				}
				return error(400, 'Пользователь с таким email уже существует');
			}
			return error(500, 'Ошибка регистрации пользователя');
		}

		redirect(303, '/signin');
	}
};
