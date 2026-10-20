import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Saleeque',
      admin: { description: 'Shown as the logo text when no logo image is set.' },
    },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Browser tab icon. Square PNG (e.g. 512×512), SVG or ICO.' },
    },
    {
      name: 'navLinks',
      label: 'Navigation Links',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'anchor',
          type: 'text',
          required: true,
          admin: { description: 'Section id without #, e.g. "about".' },
        },
      ],
    },
    {
      name: 'socials',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: ['github', 'linkedin', 'instagram', 'x', 'facebook', 'youtube', 'whatsapp'],
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'ogImage', label: 'Share Image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
