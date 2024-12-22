'use client';

import { FC } from 'react';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';
import { Favorite } from '@/ui/Favorite';
import { getContactFullName } from '@/utils/contact';

interface Props {
  id: string;
  firstName: string | null;
  lastName: string | null;
  favorite: boolean;
}

export const Contact: FC<Props> = ({ id, firstName, lastName, favorite }) => {
  const contactName = getContactFullName(firstName, lastName);

  const onContactClick = () => {
    redirect(routes.contactId({ contactId: id }));
  };

  return (
    <div
      className="mb-2 flex cursor-pointer justify-between rounded p-1 hover:bg-white hover:text-black"
      onClick={onContactClick}
    >
      <span className="mr-2">{contactName ? contactName : 'No name'}</span>
      <Favorite favorite={favorite} />
    </div>
  );
};
