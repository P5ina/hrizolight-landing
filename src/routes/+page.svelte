<script lang="ts">
	import { Package, Scale, ShieldCheck } from 'lucide-svelte';
</script>

<div class="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center space-y-4">
	<img class="w-2/3" alt="Hrizolight" src="/images/hrizolight-title.png" />
	<h2 class="h2">Сервер с модами</h2>
</div>
<div class="p-12 grid grid-cols-3 gap-16 text-center">
	<div class="card variant-glass-primary p-8 flex flex-col items-center space-y-4">
		<Scale class="size-8" />
		<h2 class="h2">Лицензия</h2>
		<p>
			На сервер можно зайти только с лицензионной версией игры. Это позволяет нам обеспечить
			стабильную работу сервера и качество игры.
		</p>
	</div>
	<div class="card variant-glass-primary p-8 flex flex-col items-center space-y-4">
		<Package class="size-8" />
		<h2 class="h2">Моды</h2>
		<p>
			На сервере установлен Create, Enigmatic Legacy, Alex's Mobs и многие другие моды. Каждый мод
			настоен так, чтобы обеспечить совместимость различных модов.
		</p>
	</div>
	<div class="card variant-glass-primary p-8 flex flex-col items-center space-y-4">
		<ShieldCheck class="size-8" />
		<h2 class="h2">Модерация</h2>
		<p>
			Модераторы сервера следят за порядком и помогают игрокам в случае проблем. У нас запрещены
			гриферство и читы.
		</p>
	</div>
</div>
