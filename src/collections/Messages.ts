import type { CollectionConfig } from 'payload'

// Contact form submissions. Created by the server action in
// src/app/(frontend)/actions.ts through the local API; the REST/GraphQL
// APIs stay closed to the public.
export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'name', 'email', 'read', 'createdAt'],
  },
  access: {
    create: () => false,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'subject', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'read',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
}
