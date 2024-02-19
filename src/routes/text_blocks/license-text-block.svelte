<script lang="ts">
	import { ShieldCheck } from 'lucide-svelte';
	import minecraftLogo from '$lib/assets/minecraft-logo.png';
	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-12 mt-16 flex flex-col md:flex-row">
	<div class="flex flex-col justify-center">
		<h2
			class="flex scroll-m-20 flex-row items-baseline text-3xl font-semibold tracking-tight"
			use:reveal
		>
			<ShieldCheck class="mr-2" />
			Лицензионный сервер
		</h2>
		<p class="mt-4" use:reveal>
			Сервер работает на лицензионной версии игры, что гарантирует вам стабильную работу и
			безопасность. Мы не используем пиратские сборки и не нарушаем правил Mojang. Все игроки должны
			иметь возможность играть в честной и безопасной среде.
		</p>
	</div>
	<img
		alt="Minecraft Logo"
		src={minecraftLogo}
		class="mx-auto mt-20 h-64 w-64 object-contain md:ml-20 md:mt-0 lg:ml-40"
		use:reveal
	/>
</div>
