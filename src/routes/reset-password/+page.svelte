<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import clsx from 'clsx';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	const toastStore = getToastStore();

	const { form, errors, enhance } = superForm(data.form, {
		onError({ result }) {
			toastStore.trigger({
				message: result.error.message
			});
		},
		onResult({ result }) {
			if (result.type === 'success') {
				toastStore.trigger({
					message: 'Вам отправлено письмо для сброса пароля.',
					background: 'variant-field-success'
				});
			}
		}
	});
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center space-y-5">
	<h2 class="h2">Сбросить пароль</h2>
	<p>Вам будет отправлено письмо для сброса пароля.</p>
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
		<div class="h-1" />
		<button type="submit" class="btn variant-filled-primary w-full">Сбросить пароль</button>
	</form>
</div>
