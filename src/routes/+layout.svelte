<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '../app.pcss';
</script>

<ModeWatcher />
<Toaster position="bottom-center" />
<div class="flex min-h-screen flex-col">
	<div class="flex-1">
		<slot />
	</div>
	<div class="flex-none">
		<Footer />
	</div>
</div>
