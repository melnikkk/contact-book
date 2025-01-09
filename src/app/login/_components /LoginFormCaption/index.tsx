'use client';

import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';

export const LoginFormCaption = () => {
  const onSignUpClick = () => {
    redirect(routes.signup());
  };

  return (
    <p className="mt-6 text-center">
      Please login or{' '}
      <span className="cursor-pointer font-bold underline" onClick={onSignUpClick}>
        signup
      </span>
    </p>
  );
};
