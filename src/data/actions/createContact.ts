'use server';

import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';
import { prisma } from '../../../db';

export const createContact = async () => {
  const emptyContact = await prisma.contact.create({ data: {} });

  redirect(
    routes.editContact({
      contactId: emptyContact.id,
    }),
  );

  // redirect(`/contacts/${emptyContact.id}`);
};
