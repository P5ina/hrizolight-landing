<script>
	import Title from '$lib/components/title/title.svelte';
	import { afterUpdate } from 'svelte';
	import CreateTextBlock from '$lib/components/text_blocks/create_text_block.svelte';
	import FreeTextBlock from '$lib/components/text_blocks/free_text_block.svelte';
	import LicenseTextBlock from '$lib/components/text_blocks/license_text_block.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';

	let show = false;

	afterUpdate(() => {
		show = true;
	});
</script>

<div class="flex h-screen w-full bg-primary">
	{#if show}
		<Title />
	{/if}
</div>
<LicenseTextBlock />
<FreeTextBlock />
<CreateTextBlock />
<div class="mt-16 p-16">
	<h1 class="scroll-m-20 text-center text-3xl tracking-tight lg:text-4xl">
		Так чего же ты ждешь? Заходи скорее!
	</h1>
	<Card.Root class="mx-auto mt-8 max-w-xl">
		<Card.Header>
			<Card.Title>Вход на сервер</Card.Title>
			<Card.Description>
				Прежде чем начать играть, заполни простую форму, мы добавим тебя в whitelist.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<form class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="nickname">Ваш никнейм от лицензионного аккаунта</Label>
					<Input type="text" placeholder="Никнейм" />
				</div>
			</form>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button>Зайти на сервер</Button>
		</Card.Footer>
	</Card.Root>
</div>
