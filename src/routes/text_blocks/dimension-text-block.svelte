<script lang="ts">
	import { Server } from 'lucide-svelte';
	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-12 mt-16">
	<div class="flex flex-col justify-center">
		<h2
			class="flex scroll-m-20 flex-row items-baseline text-3xl font-semibold tracking-tight"
			use:reveal
		>
			<Server class="mr-2" />
			Два мира - один инвентарь
		</h2>
		<p class="mt-4" use:reveal>
			На нашем сервере есть два мира: обычный и обновляющийся. В обоих мирах у вас будет одинаковый
			инвентарь, что позволит вам свободно перемещаться между ними и использовать предметы из одного
			мира в другом.
		</p>
	</div>
</div>
