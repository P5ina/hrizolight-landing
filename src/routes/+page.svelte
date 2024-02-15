<script lang="ts">
	import Title from '$lib/components/title/title.svelte';
	import { afterUpdate } from 'svelte';
	import CreateTextBlock from '$lib/components/text_blocks/create-text-block.svelte';
	import FreeTextBlock from '$lib/components/text_blocks/free-text-block.svelte';
	import LicenseTextBlock from '$lib/components/text_blocks/license-text-block.svelte';
	import WhitelistForm from './whitelist-form.svelte';
	import type { PageData } from './$types';
	import Faq from './faq.svelte';

	export let data: PageData;

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
<Faq />
<div class="p-16">
	<h1 class="scroll-m-20 text-center text-3xl tracking-tight lg:text-4xl">
		Так чего же ты ждешь? Заходи скорее!
	</h1>
	<ol class="mx-auto max-w-xl">
		<li class="mt-8">
			1. Заполни форму:
			<WhitelistForm form={data.form} />
		</li>
		<li class="mt-4">2. Установи модпак по <a href="/" class="text-primary">ссылке.</a></li>
		<li class="mt-4">3. Запусти и начни играть!</li>
	</ol>
</div>
