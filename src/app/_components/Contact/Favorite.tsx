import { FC } from 'react';

interface Props {
  favorite: boolean;
}

export const Favorite: FC<Props> = ({ favorite }) => {
  return (
    <button
      className={`${favorite ? 'text-yellow-500' : 'text-gray-500'} text-lg hover:text-yellow-400`}
    >
      {favorite ? '★' : '☆'}
    </button>
  );
};
