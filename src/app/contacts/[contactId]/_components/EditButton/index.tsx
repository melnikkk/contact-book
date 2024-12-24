'use client';

import { FC } from 'react';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';
import { Button } from '@/ui/Button';

interface Props {
  contactId: string;
}

export const EditButton: FC<Props> = ({ contactId }) => {
  const onClick = () => {
    redirect(routes.editContact({ contactId }));
  };

  return <Button onClick={onClick}>Edit</Button>;
};
