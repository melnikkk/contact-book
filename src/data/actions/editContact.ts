'use server';

import { prisma } from '../../../db';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';

export const editContact = async (contactId: string, contactFormData: FormData) => {
  const contactData = Object.fromEntries(contactFormData);
  console.log(contactData);
  await prisma.contact.update({
    where: { id: contactId },
    data: contactData,
  });

  redirect(routes.contactId({ contactId }));
};
