<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from '../../../routes/schema';
	import * as Form from '$lib/components/ui/form';
	import ConfirmButton from './confirm-button.svelte';
	import type { FormOptions } from 'formsnap';

	export let form: SuperValidated<FormSchema>;
	const options: FormOptions<FormSchema> = {
		delayMs: 200
	};
</script>

<Card.Root class="mx-auto mt-8 max-w-xl">
	<Card.Header>
		<Card.Title>Вход на сервер</Card.Title>
		<Card.Description>
			Прежде чем начать играть, заполни простую форму, мы добавим тебя в whitelist.
		</Card.Description>
	</Card.Header>
	<Form.Root method="POST" {options} {form} schema={formSchema} let:config>
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
			<Form.Field {config} name="ruleAgreement">
				<Form.Item>
					<Form.Checkbox />
					<Form.Label>Я соглашаюсь с правилами сервера</Form.Label>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<ConfirmButton delayedStore={config.form.delayed} />
		</Card.Footer>
	</Form.Root>
</Card.Root>
