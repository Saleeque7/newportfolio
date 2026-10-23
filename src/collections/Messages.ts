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
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create') return doc
        const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER
        if (!to) return doc
        // A failed email must not lose the message; it is already saved.
        try {
          await req.payload.sendEmail({
            to,
            replyTo: doc.email,
            subject: `Portfolio message: ${doc.subject}`,
            text: `From: ${doc.name} <${doc.email}>\nSubject: ${doc.subject}\n\n${doc.message}`,
          })
        } catch (err) {
          req.payload.logger.error({ err }, 'Contact notification email failed')
        }
        return doc
      },
    ],
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
