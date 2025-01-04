import { FC, InputHTMLAttributes } from 'react';

interface OwnProps {
  errored?: boolean;
}

type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({ errored = false, ...otherProps }) => {
  return (
    <input
      className={`flex h-7 w-fit rounded p-2 text-black ${errored ? 'border-2 border-red-600' : ''}`}
      {...otherProps}
    />
  );
};
