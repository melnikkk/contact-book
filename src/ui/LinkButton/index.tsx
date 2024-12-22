import { FC, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

interface OwnProps {
  children: ReactNode;
}

type Props = OwnProps & LinkProps;

export const LinkButton: FC<Props> = ({ children, ...otherProps }) => {
  return (
    <Link {...otherProps} className="rounded p-1 hover:bg-white hover:text-black">
      {children}
    </Link>
  );
};
