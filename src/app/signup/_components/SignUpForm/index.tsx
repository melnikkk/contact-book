'use client';

import { useActionState } from 'react';
import { signUp } from '@/data/actions/signUp';
import { Input } from '@/ui/Input';
import { FormFieldError } from '@/ui/FormFieldError';
import { Button } from '@/ui/Button';
import { SubmitButton } from '@/ui/SubmitButton';
import { redirect } from 'next/navigation';
import { routes } from '@/validations/routes';

export const SignUpForm = () => {
  const [formState, action, pending] = useActionState(signUp, undefined);

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
          {formState?.errors?.password && (
            <div>
              <FormFieldError errorMessage="Password must:" />
              <ul>
                {formState.errors.password.map((error) => (
                  <li key={error}>
                    <FormFieldError errorMessage={`- ${error}`} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onCancelClick}>Cancel</Button>
        <SubmitButton label="Sign Up" />
      </div>
    </form>
  );
};
