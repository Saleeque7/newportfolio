import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'I am Saleeque' },
    {
      name: 'typedStrings',
      label: 'Typed Roles',
      type: 'array',
      admin: { description: 'Rotating words typed under the title.' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'quote', type: 'text', defaultValue: 'Have A Vision Everything is possible' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
  ],
}
