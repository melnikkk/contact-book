import { createNavigationConfig } from 'next-safe-navigation';
import { z } from 'zod';

export const { routes } = createNavigationConfig((defineRoute) => ({
  home: defineRoute('/'),
  contactId: defineRoute('/contacts/[contactId]', {
    params: z.object({
      contactId: z.string().default(''),
    }),
  }),
}));