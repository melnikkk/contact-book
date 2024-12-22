'use server';

import { prisma } from '../../../db';

export const getContacts = async () => {
  const contacts = await prisma.contact.findMany();

  return contacts;
};
