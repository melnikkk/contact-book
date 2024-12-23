// TODO: provide contact type amd mapper
export const getContactFullName = (
  firstName: string | null,
  lastName: string | null,
): string => {
  const contactName = (firstName ?? '') + (lastName ? ` ${lastName}` : '');

  return contactName ? contactName : 'No name';
};
