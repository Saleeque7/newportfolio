import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  labels: { singular: 'Experience', plural: 'Experience' },
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'startDate', 'current'],
  },
  access: {
    read: () => true,
  },
  defaultSort: '-startDate',
  fields: [
    { name: 'role', type: 'text', required: true },
    { name: 'company', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        { name: 'startDate', type: 'date', required: true },
        {
          name: 'endDate',
          type: 'date',
          admin: { condition: (_, siblingData) => !siblingData?.current },
        },
        { name: 'current', label: 'I work here now', type: 'checkbox' },
      ],
    },
    { name: 'description', type: 'textarea' },
  ],
}
