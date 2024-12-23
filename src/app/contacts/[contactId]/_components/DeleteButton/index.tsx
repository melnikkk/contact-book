'use client';

import { FC } from 'react';
import { Button } from '@/ui/Button';

interface Props {
  onClick: () => Promise<void>;
}

export const DeleteButton: FC<Props> = ({ onClick }) => {
  return <Button onClick={onClick}>Delete</Button>;
};
