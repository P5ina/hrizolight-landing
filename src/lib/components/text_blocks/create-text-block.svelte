<script lang="ts">
	import { Settings } from 'lucide-svelte';
	import createLogo from '$lib/assets/create-logo.webp';
	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-12 mt-16 flex flex-col md:flex-row">
	<div class="flex flex-col justify-center">
		<h2
			class="flex scroll-m-20 flex-row items-baseline font-mono text-3xl tracking-tight"
			use:reveal
		>
			<Settings class="mr-2" />
			Create
		</h2>
		<p class="mt-4 font-mono" use:reveal>
			В основе сервера лежит мод Create, который добавляет измутельные механизмы и способы
			автоматизации. Создавайте фермы, автоматизируйте процесс зачарования, расчищайте огромные
			территории - все это и многое другое вас ждет на сервере.
		</p>
	</div>
	<img
		alt="Create Logo"
		src={createLogo}
		class="mx-auto mt-20 h-64 w-64 md:ml-20 md:mt-0 lg:ml-40"
		use:reveal
	/>
</div>
