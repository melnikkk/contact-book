'use server';

import { prisma } from '../../../db';
import { routes } from '@/validations/routes';
import { redirect } from 'next/navigation';

export const deleteContact = async (contactId: string) => {
  await prisma.contact.delete({ where: { id: contactId } });

  redirect(routes.contacts());
};
