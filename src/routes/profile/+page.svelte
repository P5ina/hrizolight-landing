<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { SkinView } from '$lib/components/ui/skinview';

	let profileStatus: 'pending' | 'approved' | 'rejected' = 'rejected';
</script>

<div class="h-16"></div>
<div class="mx-16 mt-10 flex flex-row items-stretch space-x-12">
	<SkinView width={250} height={500} />
	<div>
		<Separator orientation="vertical" />
	</div>
	<div class="flex flex-1 flex-col items-start">
		<h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
			Профиль игрока P5ina
		</h2>
		<h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
			Cтатус заявки:
			{#if profileStatus === 'pending'}
				<span class="text-gray-500">На рассмотрении</span>
			{:else if profileStatus === 'approved'}
				<span class="text-lime-500">Принята</span>
			{:else if profileStatus === 'rejected'}
				<span class="text-red-500">Отклонена</span>
			{/if}
		</h3>
		<p class="mt-4 leading-7">
			{#if profileStatus === 'pending'}
				Мы рассмотрим вашу заявку в течение 24 часов. Пожалуйста, будьте терпеливы.
			{:else if profileStatus === 'approved'}
				Ваша заявка принята. Добро пожаловать на сервер!
			{:else if profileStatus === 'rejected'}
				Ваша заявка отклонена. Вы можете подать новую заявку.
			{/if}
		</p>
		{#if profileStatus === 'rejected'}
			<Button class="mt-2">Подать новую заявку</Button>
		{/if}
	</div>
</div>
