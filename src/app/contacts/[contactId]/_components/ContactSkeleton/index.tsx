import { FC } from 'react';

export const ContactSkeleton: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-6 flex h-6 w-32 animate-pulse self-center rounded bg-gray-300 opacity-35" />
      <div className="mb-3 h-6 w-52 animate-pulse rounded bg-gray-300 opacity-35" />
      <div className="mb-3 h-6 w-52 animate-pulse rounded bg-gray-300 opacity-35" />
      <div className="mb-6 h-6 w-52 animate-pulse rounded bg-gray-300 opacity-35" />
      <div className="flex justify-between">
        <div className="flex h-6 w-24 animate-pulse self-center rounded bg-gray-300 opacity-35" />
        <div className="flex h-6 w-24 animate-pulse self-center rounded bg-gray-300 opacity-35" />
      </div>
    </div>
  );
};
