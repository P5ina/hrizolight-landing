<script lang="ts">
	import Title from '$lib/components/title/title.svelte';
	import { afterUpdate } from 'svelte';
	import CreateTextBlock from '$lib/components/text_blocks/create-text-block.svelte';
	import FreeTextBlock from '$lib/components/text_blocks/free-text-block.svelte';
	import LicenseTextBlock from '$lib/components/text_blocks/license-text-block.svelte';
	import WhitelistForm from '$lib/components/whitelist-form/whitelist-form.svelte';
	import type { PageData } from './$types';

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
<div class="mt-16 p-16">
	<h1 class="scroll-m-20 text-center text-3xl tracking-tight lg:text-4xl">
		Так чего же ты ждешь? Заходи скорее!
	</h1>
	<WhitelistForm form={data.form} />
</div>
