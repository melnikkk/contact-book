import { GoToContactsButton } from '@/app/_components/GoToContactsButton';

export default function Home() {
  return (
    <>
      <h1 className="mb-12 text-2xl font-bold">The Book of Contacts</h1>

      <div className="flex justify-center">
        <GoToContactsButton />
      </div>
    </>
  );
}
