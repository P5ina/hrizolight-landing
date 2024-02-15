<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Toaster />
<slot />
<Footer />
