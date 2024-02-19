<script>
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<div class="mx-24 mt-16">
	<h1 class="scroll-m-20 text-center text-3xl tracking-tight lg:text-4xl">FAQ</h1>
	<Accordion.Root class="mt-8">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Как начать играть?</Accordion.Trigger>
			<Accordion.Content>
				Заполни форму на главной странице, и дождись окончания процедуры добавления. Заходи на
				сервер по IP <code class="text-primary">hrizolight.ru</code> на версии
				<code class="text-primary">1.20.4</code>.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Где взять IP?</Accordion.Trigger>
			<Accordion.Content>
				Наш IP: <code class="text-primary">hrizolight.ru</code>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
