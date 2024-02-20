<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Кажется произошла ошибка 😢</h1>
		<p>{$page.status}: {$page.error?.message}</p>
		<p>Попробуйте перезагрузить страницу или вернуться на главную</p>
	</div>
</div>
