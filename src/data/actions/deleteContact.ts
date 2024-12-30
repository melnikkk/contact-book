'use server';

import { prisma } from '../../../db';
import { routes } from '@/validations/routes';
import { redirect } from 'next/navigation';
import { slowDown } from '@/utils/common';

export const deleteContact = async (contactId: string) => {
  await slowDown();
  await prisma.contact.delete({ where: { id: contactId } });

  redirect(routes.contacts());
};
