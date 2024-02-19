<script lang="ts">
	import { Boxes } from 'lucide-svelte';
	import modShowcase from '$lib/assets/mod-showcase.webp';
	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-12 mt-16 flex flex-col md:flex-row">
	<div class="flex flex-col justify-center">
		<h2
			class="flex scroll-m-20 flex-row items-baseline text-3xl font-semibold tracking-tight"
			use:reveal
		>
			<Boxes class="mr-2" />
			Моды без модов
		</h2>
		<p class="mt-4" use:reveal>
			Все модификации установленные на сервере не нужно устанавливать у себя. Весь контент доступен
			с ванильного клиента. Сервер лишь предложит вам скачать ресурспак, который и добавляет в игру
			новые возможности.
		</p>
	</div>
	<img
		alt="Mod Showcase"
		src={modShowcase}
		class="mx-auto mt-20 h-64 w-64 rounded-3xl md:ml-20 md:mt-0 lg:ml-40"
		use:reveal
	/>
</div>
