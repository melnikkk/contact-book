'use client';

import { Button } from '@/ui/Button';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';

export const LoginButton = () => {
  const onClick = () => {
    redirect(routes.login());
  };
  return <Button onClick={onClick}>Login</Button>;
};
