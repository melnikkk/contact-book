import { EditContactForm } from './_components/EditContactForm';

interface Props {
  params: Promise<{ contactId: string }>;
}

export default async function EditContactPage({ params }: Props) {
  const contactId = (await params).contactId;

  return <EditContactForm contactId={contactId} />;
}
