'use client';

import { redirect } from 'next/navigation';
import { Button } from '@/ui/Button';
import { routes } from '@/validations/routes';

export const GoToContactsButton = () => {
  const onClick = () => {
    redirect(routes.contacts());
  };

  return <Button onClick={onClick}>Go to contacts!</Button>;
};
