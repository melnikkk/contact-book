'use server';

import { redirect } from 'next/navigation';
import { deleteSession } from '@/utils/session';
import { routes } from '@/validations/routes';

export const logout = async () => {
  await deleteSession();

  redirect(routes.home());
};
