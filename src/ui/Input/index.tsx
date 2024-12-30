import { FC, InputHTMLAttributes } from 'react';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...otherProps }) => {
  return <input className="flex h-7 w-fit rounded p-2 text-black" {...otherProps} />;
};
