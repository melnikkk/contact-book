'use server';

import { prisma } from '../../../db';
import { routes } from '@/validations/routes';
import { revalidatePath } from 'next/cache';

export const markContactAsFavorite = async (contactId: string, favorite: boolean) => {
  await prisma.contact.update({
    where: { id: contactId },
    data: {
      favorite,
    },
  });

  revalidatePath(routes.contactId({ contactId }));
};
