import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  password: z.string(),
});

export type LoginFormState =
  | {
      errors?: {
        email?: Array<string>;
      };
    }
  | undefined;
