import { z } from 'zod';

export const formSchema = z.object({
	nickname: z.string().min(2),
	reason: z.string()
});

export type FormSchema = typeof formSchema;
