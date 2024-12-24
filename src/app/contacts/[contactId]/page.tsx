import { notFound } from 'next/navigation';
import { getContact } from '@/data/service/getContact';
import { getContactFullName } from '@/utils/contact';
import { Favorite } from '@/ui/Favorite';
import { deleteContact } from '@/data/actions/deleteContact';
import { DeleteButton } from './_components/DeleteButton';
import { EditButton } from '@/app/contacts/[contactId]/_components/EditButton';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ contactId: string }>;
}) {
  const contactId = (await params).contactId;
  const contact = await getContact(contactId);
  const contactFullName = getContactFullName(contact.first_name, contact.last_name);

  const onDeleteClick = async () => {
    'use server';

    await deleteContact(contactId);
  };

  if (!contactId) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <h1 className="mb-2 flex justify-center text-xl font-bold">
        <span className="mr-2">{contactFullName}</span>
        <Favorite favorite={contact.favorite} />
      </h1>

      {contact.email ? (
        <p className="mb-1">
          <span className="font-bold">Email:</span> {contact.email}
        </p>
      ) : null}
      {contact.phone_number ? (
        <p className="mb-1">
          <span className="font-bold">Phone:</span> {contact.phone_number}
        </p>
      ) : null}
      {contact.web_link ? (
        <p className="mb-1">
          <span className="font-bold">Link:</span>{' '}
          <a className="italic underline" href={contact.web_link}>
            {contact.web_link}
          </a>
        </p>
      ) : null}

      <div className="mt-6 flex justify-between">
        <EditButton contactId={contactId} />
        <DeleteButton onClick={onDeleteClick} />
      </div>
    </div>
  );
}
