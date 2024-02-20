<script lang="ts">
	import { AppBar, Avatar, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { Home } from 'lucide-svelte';
	import type { AuthModel } from 'pocketbase';

	export let user: AuthModel | null;

	const profilePopup: PopupSettings = {
		event: 'click',
		target: 'profilePopup',
		placement: 'bottom'
	};
</script>

<div class="card shadow-xl" data-popup="profilePopup">
	<div class="btn-group-vertical variant-filled-surface">
		<a href="/profile">Профиль</a>
		<form action="/signout" method="post" class="w-full">
			<button type="submit" class="w-full">Выйти</button>
		</form>
	</div>
	<!-- <div class="arrow variant-filled-surface" /> -->
</div>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/">
			<Home class="w-6 h-6" />
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if user}
			<button class="btn-icon variant-filled h-8 w-8" use:popup={profilePopup}>
				<Avatar src="steve-avatar.png" fallback="steve-avatar.png"></Avatar>
			</button>
		{:else}
			<div class="flex space-x-4">
				<a class="btn variant-ghost" href="/signin">Войти</a>
				<a class="btn variant-filled" href="/signup">Зарегистрироваться</a>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
