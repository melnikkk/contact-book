'use client';

import { useActionState } from 'react';
import { Input } from '@/ui/Input';
import { FormFieldError } from '@/ui/FormFieldError';
import { Button } from '@/ui/Button';
import { SubmitButton } from '@/ui/SubmitButton';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';
import { login } from '@/data/actions/login';
import { LoginFormCaption } from '@/app/login/_components /LoginFormCaption';

export const LoginForm = () => {
  const [formState, action, pending] = useActionState(login, undefined);

  const onCancelClick = () => {
    redirect(routes.home());
  };

  return (
    <form className="max-w-72" action={action}>
      <div className="mb-4 flex justify-between">
        <label className="mr-4" htmlFor="email">
          Email
        </label>
        <div>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={pending}
            errored={Boolean(formState?.errors?.email)}
          />
          {formState?.errors?.email ? (
            <FormFieldError errorMessage={formState?.errors?.email[0]} />
          ) : null}
        </div>
      </div>

      <div className="mb-6 flex justify-between">
        <label className="mr-4" htmlFor="password">
          Password
        </label>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            disabled={pending}
            errored={Boolean(formState?.errors?.password)}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onCancelClick}>Cancel</Button>
        <SubmitButton label="Login" />
      </div>

      <LoginFormCaption />
    </form>
  );
};
