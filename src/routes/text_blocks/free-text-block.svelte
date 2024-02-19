<script>
	import { HandCoins } from 'lucide-svelte';
	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-12 mt-16 flex h-64 flex-row">
	<div class="flex flex-col justify-center">
		<h2
			class="flex scroll-m-20 flex-row items-baseline text-3xl font-semibold tracking-tight"
			use:reveal
		>
			<HandCoins class="mr-2" />
			Бесплатный доступ
		</h2>
		<p class="mt-4" use:reveal>
			На наш сервер можно зайти только по заявке, мы тщательно проверяем каждого игрока. У нас
			дружное коммьюнити и мы хотим, чтобы каждый чувствовал себя комфортно.
		</p>
	</div>
</div>
