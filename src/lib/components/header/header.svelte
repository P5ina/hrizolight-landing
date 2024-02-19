<script>
	import { Home } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<header class="fixed top-0 w-full bg-primary text-primary-foreground">
	<nav class="flex items-center px-12 py-4">
		<a href="/" class="flex">
			<Home class="mr-2" />
			Главная
		</a>
		<div class="flex-1"></div>
		<a href="/profile">
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="P5ina" />
				<Avatar.Fallback>P</Avatar.Fallback>
			</Avatar.Root>
		</a>
	</nav>
</header>
