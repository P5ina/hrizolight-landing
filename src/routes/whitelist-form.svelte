<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from './schema';
	import * as Form from '$lib/components/ui/form';

	export let form: SuperValidated<FormSchema>;
</script>

<Card.Root class="mx-auto mt-8 max-w-xl">
	<Card.Header>
		<Card.Title>Вход на сервер</Card.Title>
		<Card.Description>
			Прежде чем начать играть, заполни простую форму, мы добавим тебя в whitelist.
		</Card.Description>
	</Card.Header>
	<Form.Root method="POST" {form} schema={formSchema} let:config>
		<Card.Content class="grid w-full items-center gap-4">
			<Form.Field {config} name="nickname">
				<Form.Item>
					<Form.Label>Никнейм</Form.Label>
					<Form.Input />
					<Form.Description>Ваш никнейм от лицензионного аккаунта.</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="reason">
				<Form.Item>
					<Form.Label>Причина (опционально)</Form.Label>
					<Form.Input placeholder="Давно хотел поиграть с модами" />
					<Form.Description>Почему вас заинтересовал сервер?</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Form.Button>Зайти на сервер</Form.Button>
		</Card.Footer>
	</Form.Root>
</Card.Root>
