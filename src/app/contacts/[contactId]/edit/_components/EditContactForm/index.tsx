import { FC } from 'react';
import { getContact } from '@/data/service/getContact';
import { editContact } from '@/data/actions/editContact';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { LinkButton } from '@/ui/LinkButton';

interface Props {
  contactId: string;
}

export const EditContactForm: FC<Props> = async ({ contactId }) => {
  const contact = await getContact(contactId);

  return (
    <form action={editContact.bind(null, contactId)}>
      <div className="mb-4 flex justify-between">
        <label className="mr-4" htmlFor="first_name">
          First name
        </label>
        <Input
          name="first_name"
          placeholder="First name"
          defaultValue={contact.first_name ?? ''}
        />
      </div>

      <div className="mb-4 flex justify-between">
        <label className="mr-4" htmlFor="last_name">
          Last name
        </label>
        <Input
          name="last_name"
          placeholder="Last name"
          defaultValue={contact.last_name ?? ''}
        />
      </div>

      <div className="mb-4 flex justify-between">
        <label className="mr-4" htmlFor="email">
          Email
        </label>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          defaultValue={contact.email ?? ''}
        />
      </div>

      <div className="mb-4 flex justify-between">
        <label className="mr-4" htmlFor="phone_number">
          Phone
        </label>
        <Input
          name="phone_number"
          placeholder="Phone"
          type="phone"
          defaultValue={contact.phone_number ?? ''}
        />
      </div>

      <div className="mb-10 flex justify-between">
        <label className="mr-4" htmlFor="web_link">
          Link
        </label>
        <Input
          name="web_link"
          placeholder="Link"
          type="url"
          defaultValue={contact.web_link ?? ''}
        />
      </div>

      <div className="flex justify-between">
        <LinkButton href={`/contacts/${contactId}`}>Cancel</LinkButton>
        <Button className="rounded p-1 hover:bg-white hover:text-black" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};
