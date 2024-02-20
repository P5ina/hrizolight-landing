<script lang="ts">
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { Home } from 'lucide-svelte';
	import type { AuthModel } from 'pocketbase';

	export let user: AuthModel | null;
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/">
			<Home class="w-8 h-8" />
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if user}
			<a href="/profile" class="flex space-x-4 h-8 w-8">
				<Avatar src="steve-avatar.png" fallback="steve-avatar.png"></Avatar>
			</a>
		{:else}
			<div class="flex space-x-4">
				<a class="btn variant-ghost" href="/signin">Войти</a>
				<a class="btn variant-filled" href="/signup">Зарегистрироваться</a>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
