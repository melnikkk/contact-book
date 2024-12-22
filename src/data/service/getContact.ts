import { prisma } from '../../../db';
import { notFound } from 'next/navigation';

export const getContact = async (contactId: string) => {
  const contact = await prisma.contact.findUnique({ where: { id: contactId } });

  if (!contact) {
    notFound();
  }

  return contact;
};
