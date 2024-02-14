<script>
	import { HandCoins } from 'lucide-svelte';
	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-12 mt-16 flex h-64 flex-row">
	<div class="flex flex-col justify-center">
		<h2
			class="flex scroll-m-20 flex-row items-baseline font-mono text-3xl tracking-tight"
			use:reveal
		>
			<HandCoins class="mr-2" />
			Полностью бесплатный
		</h2>
		<p class="mt-4 font-mono" use:reveal>
			Все моды, которые мы используем на сервере, а также сам сервер, полностью бесплатны. Никаких
			донатов, никаких платных привилегий. Мы считаем, что все игроки должны иметь равные
			возможности, и никто не должен платить за преимущество. Сервер существует за счет добровольных
			пожертвований игроков, которые хотят поддержать проект.
		</p>
	</div>
</div>
