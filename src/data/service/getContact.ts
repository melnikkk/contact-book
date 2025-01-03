import { prisma } from '../../../db';
import { notFound } from 'next/navigation';
import { slowDown } from '@/utils/common';

export const getContact = async (contactId: string) => {
  await slowDown();

  const contact = await prisma.contact.findUnique({ where: { id: contactId } });

  if (!contact) {
    notFound();
  }

  return contact;
};
