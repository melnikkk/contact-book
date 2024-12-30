'use client';

import { FC, useOptimistic, useTransition } from 'react';
import { markContactAsFavorite } from '@/data/actions/markContactAsFavorite';

interface Props {
  id: string;
  favorite: boolean;
  isDisabled?: boolean;
}

export const Favorite: FC<Props> = ({ id, favorite, isDisabled = false }) => {
  const [optimisticFavorite, addOptimisticFavorite] = useOptimistic(
    favorite,
    (_state: boolean, newState: boolean) => newState,
  );

  const [, startTransition] = useTransition();

  const onClick = () => {
    startTransition(async () => {
      addOptimisticFavorite(!optimisticFavorite);

      await markContactAsFavorite(id, !optimisticFavorite);
    });
  };

  return (
    <button
      disabled={isDisabled}
      className={`${optimisticFavorite ? 'text-yellow-500' : 'text-gray-500'} ${!isDisabled ? 'hover:text-yellow-400' : ''}`}
      onClick={onClick}
    >
      {optimisticFavorite ? '★' : '☆'}
    </button>
  );
};
