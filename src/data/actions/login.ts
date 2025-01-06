'use server';

import bcrypt from 'bcrypt';
import { LoginFormSchema, LoginFormState } from '@/validations/loginFormSchema';
import { prisma } from '../../../db';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';
import { createSession } from '@/utils/session';

export const login = async (_state: LoginFormState, formData: FormData) => {
  const validatedForm = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedForm.success) {
    return {
      errors: validatedForm.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedForm.data;

  const existedUser = await prisma.user.findUnique({ where: { email } });

  // TODO: handle not existing user error
  if (!existedUser) {
    console.error('Invalid email or password');

    return { success: false, message: 'Invalid email or password' };
  }

  const isValidPassword = bcrypt.compareSync(password, existedUser.password);

  if (!isValidPassword) {
    throw new Error('Invalid email or password');
  }

  await createSession(existedUser.id);

  redirect(routes.contacts());
};
