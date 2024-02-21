<script lang="ts">
	export let data;

	const navigation = [
		{ title: 'Основные', href: '/profile/general' },
		{ title: 'Безопасность', href: '/profile/security' },
		{ title: 'Форум', href: '/profile/forum' }
	];
</script>

<div class="px-2">
	<h3 class="h3">Настройки</h3>
</div>
<div class="flex">
	<ul>
		{#each navigation as { title, href }}
			<li>
				<a {href}>{title}</a>
			</li>
		{/each}
	</ul>
</div>
