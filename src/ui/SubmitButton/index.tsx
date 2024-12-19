'use client';

import { FC } from 'react';
import { useFormStatus } from 'react-dom';

interface Props {
  label: string;
}

export const SubmitButton: FC<Props> = ({ label, ...otherProps }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} {...otherProps}>
      {label}
    </button>
  );
};
