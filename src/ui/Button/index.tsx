import { FC, ButtonHTMLAttributes } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <button {...otherProps} className="block rounded p-1 hover:bg-white hover:text-black">
      {children}
    </button>
  );
};
