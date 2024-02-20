<script lang="ts">
	import { AppShell, Toast, initializeStores } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Header from './header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	initializeStores();
</script>

<Toast />

<AppShell>
	<svelte:fragment slot="header">
		<Header user={data.user} />
	</svelte:fragment>
	<slot />
</AppShell>
