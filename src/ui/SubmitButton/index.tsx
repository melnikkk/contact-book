'use client';

import { FC } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/ui/Button';

interface Props {
  label: string;
}

export const SubmitButton: FC<Props> = ({ label, ...otherProps }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} loading={pending} {...otherProps}>
      {label}
    </Button>
  );
};
