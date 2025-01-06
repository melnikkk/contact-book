'use server';

import bcrypt from 'bcrypt';
import { SignUpFormSchema, SignUpFormState } from '@/validations/signUpFormSchema';
import { prisma } from '../../../db';
import { createSession } from '@/utils/session';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';

export const signUp = async (_state: SignUpFormState, formData: FormData) => {
  const validatedForm = SignUpFormSchema.safeParse({
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

  // TODO: handle existing user error
  if (existedUser) {
    console.error('The user with this email already exists');

    return { success: false, message: 'The user with this email already exists' };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    await createSession(newUser.id);

    redirect(routes.contacts());
  } catch (e) {
    console.error(e);

    return {
      success: false,
      message: 'Something went wrong while creating your account',
    };
  }
};
