<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '../app.pcss';
	import Header from '$lib/components/header/header.svelte';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client';
	import { authStore } from '$lib/stores/auth-store';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((store) => {
				return {
					...store,
					isLoading: false,
					currentUser: user
				};
			});
		});
	});
</script>

<ModeWatcher />
<Toaster position="bottom-center" />
<Header />
<div class="flex min-h-screen flex-col">
	<div class="flex-1">
		<slot />
	</div>
	<div class="flex-none">
		<Footer />
	</div>
</div>
