'use client';

import { FC } from 'react';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';
import { Favorite } from '@/app/_components/Contact/Favorite';

interface Props {
  id: string;
  firstName: string | null;
  lastName: string | null;
  favorite: boolean;
}

export const Contact: FC<Props> = ({ id, firstName, lastName, favorite }) => {
  const contactName = firstName ?? '' + (lastName ? ` ${lastName}` : '');

  const onContactClick = () => {
    redirect(routes.contactId({ contactId: id }));
  };

  return (
    <div
      className="mb-2 flex w-full cursor-pointer content-center justify-between rounded p-1 hover:bg-white hover:text-black"
      onClick={onContactClick}
    >
      <p className="mr-2">{contactName ? contactName : 'No name'}</p>
      <Favorite favorite={favorite} />
    </div>
  );
};
