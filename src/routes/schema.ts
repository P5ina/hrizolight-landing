import { z } from 'zod';

export const formSchema = z.object({
	nickname: z.string().min(2, 'Никнейм должен быть длиннее 1 символа'),
	reason: z.string(),
	ruleAgreement: z.literal(true, {
		errorMap: () => ({ message: 'Вы должны согласиться с правилами сервера' })
	})
});

export type FormSchema = typeof formSchema;
