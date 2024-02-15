<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Toaster />
<div class="flex min-h-screen flex-col">
	<div class="flex-1">
		<slot />
	</div>
	<div class="flex-none">
		<Footer />
	</div>
</div>
