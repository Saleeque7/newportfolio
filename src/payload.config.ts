import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Experience } from './collections/Experience'
import { Messages } from './collections/Messages'
import { SiteSettings } from './globals/SiteSettings'
import { Hero } from './globals/Hero'
import { About } from './globals/About'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects, Services, Experience, Messages],
  globals: [SiteSettings, Hero, About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  // Gmail SMTP for contact form notifications; without credentials Payload just logs emails to the console.
  email: process.env.SMTP_USER
    ? nodemailerAdapter({
        defaultFromAddress: process.env.SMTP_USER,
        defaultFromName: 'Portfolio Contact Form',
        // Skip the SMTP handshake on every cold start
        skipVerify: true,
        transportOptions: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        },
      })
    : undefined,
  plugins: [
    // Store uploads in Vercel Blob when deployed; without a token they stay in the local media/ folder.
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      // Uploads go through the server, so files must stay under Vercel's 4.5 MB request limit.
      // Browser-direct uploads (clientUploads) hung on files over ~1 MB when Payload read them back.
    }),
  ],
})
