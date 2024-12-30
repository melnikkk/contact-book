import { FC, ButtonHTMLAttributes } from 'react';

interface OwnProps {
  loading?: boolean;
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children, loading = false, ...otherProps }) => {
  return (
    <button
      className="flex rounded p-1 duration-500 ease-in-out hover:bg-white hover:text-black"
      {...otherProps}
    >
      {children}
      {loading ? (
        <div className="ml-2 flex h-5 w-5 animate-spin self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9"
            />
          </svg>
        </div>
      ) : null}
    </button>
  );
};
