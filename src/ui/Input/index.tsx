import { FC, InputHTMLAttributes } from 'react';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...otherProps }) => {
  return <input className="h-8 rounded p-2 text-black" {...otherProps} />;
};
