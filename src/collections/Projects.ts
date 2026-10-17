import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'published'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'cover', type: 'upload', relationTo: 'media', required: true },
    { name: 'gallery', type: 'upload', relationTo: 'media', hasMany: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'techStack',
      type: 'array',
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    { name: 'liveUrl', type: 'text' },
    { name: 'repoUrl', type: 'text' },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
    { name: 'published', type: 'checkbox', defaultValue: true, admin: { position: 'sidebar' } },
  ],
}
