'use server';

import { prisma } from '../../../db';

export const getContacts = async () => {
  return prisma.contact.findMany();
};
