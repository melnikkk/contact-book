import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  password: z
    .string()
    .min(8, { message: 'At least 8 characters long required' })
    .regex(/[a-zA-Z]/, { message: 'At least one letter required' })
    .regex(/[0-9]/, { message: 'At least one number required' }),
});

export type SignUpFormState =
  | {
      errors?: { email?: Array<string>; password?: Array<string> };
    }
  | undefined;
