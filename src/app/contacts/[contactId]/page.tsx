import { notFound } from 'next/navigation';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ contactId: string }>;
}) {
  const contactId = (await params).contactId;

  return <div>Contact with ID: {contactId}</div>;
}
