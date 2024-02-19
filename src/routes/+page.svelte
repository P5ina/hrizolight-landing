<script lang="ts">
	import Title from './title.svelte';
	import { afterUpdate } from 'svelte';
	import ModTextBlock from './text_blocks/mod-text-block.svelte';
	import FreeTextBlock from './text_blocks/free-text-block.svelte';
	import LicenseTextBlock from './text_blocks/license-text-block.svelte';
	import Faq from './faq.svelte';
	import DimensionTextBlock from './text_blocks/dimension-text-block.svelte';
	import { copy } from 'svelte-copy';
	import { toast } from 'svelte-sonner';

	let show = false;

	afterUpdate(() => {
		show = true;
	});

	function copiedToClipboard() {
		toast.success('Скопировано в буфер обмена');
	}
</script>

<div class="flex h-screen w-full bg-primary">
	{#if show}
		<Title />
	{/if}
</div>
<LicenseTextBlock />
<FreeTextBlock />
<ModTextBlock />
<DimensionTextBlock />
<Faq />
<div class="p-16">
	<h1 class="scroll-m-20 text-center text-3xl tracking-tight lg:text-4xl">
		Так чего же ты ждешь? Заходи скорее!
	</h1>
	<ol class="mx-auto max-w-2xl space-y-4">
		<li class="mt-8">
			1. Зайди на сервер по IP
			<button
				use:copy={'hrizolight.ru'}
				on:svelte-copy={copiedToClipboard}
				class="font-mono text-primary"
			>
				hrizolight.ru
			</button>.
		</li>
		<li>
			2. Пропиши команду <button
				use:copy={'/link'}
				on:svelte-copy={copiedToClipboard}
				class="font-mono text-primary">/link</button
			>.
		</li>
		<li>3. Перейди по ссылке из чата в браузер и создай аккаунт.</li>
		<li>4. Дождись когда мы подтвердим профиль.</li>
		<li>5. Можешь начинать играть!</li>
	</ol>
</div>
