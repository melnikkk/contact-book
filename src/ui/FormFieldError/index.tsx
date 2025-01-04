import { FC } from 'react';

interface Props {
  errorMessage: string;
}

export const FormFieldError: FC<Props> = ({ errorMessage }) => {
  return <p className="mt-1 text-sm text-red-600">{errorMessage}</p>;
};
