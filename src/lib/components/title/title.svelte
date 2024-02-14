<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import title from '$lib/assets/hrizolight_title.png';
</script>

<div class="m-auto flex w-2/3 flex-col">
	<img alt="Hrizolight Title" src={title} use:reveal />
	<h2
		class="mt-5 scroll-m-20 text-center font-mono text-2xl tracking-tight text-primary-foreground lg:text-3xl"
		use:reveal={{ delay: 600 }}
	>
		Сервер с модами
	</h2>
</div>
