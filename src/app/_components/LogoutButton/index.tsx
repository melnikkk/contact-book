'use client';

import { Button } from '@/ui/Button';
import { logout } from '@/data/actions/logout';

export const LogoutButton = () => {
  const onClick = async () => {
    await logout();
  };
  return <Button onClick={onClick}>Logout</Button>;
};
