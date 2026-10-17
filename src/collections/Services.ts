import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'icon',
      type: 'text',
      admin: { description: 'Bootstrap icon class, e.g. "bi-code-slash".' },
    },
    { name: 'description', type: 'textarea' },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
}
