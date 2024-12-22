import { FC } from 'react';
import { Contact } from '@/app/_components/Contact';

interface Props {
  // TODO: provide types
  contacts: Array<any>;
}

export const ContactsList: FC<Props> = ({ contacts }) => {
  return contacts.map(({ id, last_name, first_name, favorite }) => (
    <Contact
      key={id}
      id={id}
      firstName={first_name}
      lastName={last_name}
      favorite={favorite}
    />
  ));
};
