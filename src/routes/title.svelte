<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import title from '$lib/assets/hrizolight-title.png';
</script>

<div class="m-auto flex w-2/3 flex-col">
	<img alt="Hrizolight Title" src={title} use:reveal />
	<h2
		class="mt-5 scroll-m-20 text-center text-2xl font-semibold tracking-tight text-primary-foreground lg:text-3xl"
		use:reveal={{ delay: 600 }}
	>
		Моды без модов
	</h2>
</div>
