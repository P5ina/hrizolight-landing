<script lang="ts">
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import clsx from 'clsx';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	const toastStore = getToastStore();

	const { form, errors, enhance } = superForm(data.form, {
		onError({ result }) {
			const t: ToastSettings = {
				message: result.error.message
			};
			toastStore.trigger(t);
		}
	});
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center space-y-5">
	<h2 class="h2">Войдите в аккаунт</h2>
	<p>
		Еще нет аккаунта? <a
			href="/signup"
			class="text-primary-500 font-medium hover:cursor-pointer hover:underline"
		>
			Создать
		</a>
	</p>
	<form
		method="post"
		class="flex flex-col items-center space-y-2 w-full max-w-xl px-16"
		use:enhance
	>
		<label class="label w-full">
			<span>Email</span>
			<input
				type="email"
				name="email"
				class={clsx('input', $errors.email && 'input-error')}
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
			/>
			{#if $errors.email}<span class="text-error-500">{$errors.email}</span>{/if}
		</label>
		<label class="label w-full">
			<span>Пароль</span>
			<input
				type="password"
				name="password"
				class={clsx('input', $errors.password && 'input-error')}
				aria-invalid={$errors.password ? 'true' : undefined}
				bind:value={$form.password}
			/>
			{#if $errors.password}<span class="text-error-500">{$errors.password}</span>{/if}
		</label>
		<div class="h-1" />
		<button type="submit" class="btn variant-filled-primary w-full">Войти</button>
	</form>
</div>
