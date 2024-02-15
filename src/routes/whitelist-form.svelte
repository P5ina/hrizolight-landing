<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from './schema';
	import * as Form from '$lib/components/ui/form';
	import ConfirmButton from '$lib/components/whitelist-form/confirm-button.svelte';
	import type { FormOptions } from 'formsnap';
	import type { FormResult } from 'sveltekit-superforms/client';
	import type { ActionData } from './$types';
	import { toast } from 'svelte-sonner';

	export let form: SuperValidated<FormSchema>;
	const options: FormOptions<FormSchema> = {
		delayMs: 200,
		onResult(event) {
			const result = event.result as FormResult<ActionData>;
			if (result.type === 'success') {
				toast.success('Заявка отправлена');
			}
		}
	};
</script>

<Card.Root class="mt-2">
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
					<div class="flex flex-row items-center space-x-3 space-y-0">
						<Form.Checkbox />
						<Form.Label>Я соглашаюсь с правилами сервера</Form.Label>
					</div>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<ConfirmButton delayedStore={config.form.delayed} />
		</Card.Footer>
	</Form.Root>
</Card.Root>
