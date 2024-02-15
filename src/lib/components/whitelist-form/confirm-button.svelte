<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Loader2 } from 'lucide-svelte';
	import type { Readable } from 'svelte/store';

	export let delayedStore: Readable<boolean>;
</script>

{#if $delayedStore}
	<Form.Button disabled>
		<Loader2 class="mr-2 h-4 w-4 animate-spin" />
		Отправляем запрос
	</Form.Button>
{:else}
	<Form.Button>Зайти на сервер</Form.Button>
{/if}
