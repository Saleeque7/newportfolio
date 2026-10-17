import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'name', type: 'text', required: true },
    { name: 'profile', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'text' },
    { name: 'bio', type: 'richText' },
    {
      name: 'skills',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'percentage', type: 'number', required: true, min: 0, max: 100 },
      ],
    },
  ],
}
