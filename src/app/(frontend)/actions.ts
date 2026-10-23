'use server'

import { getPayload } from 'payload'

import config from '@/payload.config'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'subject' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field
  if (formData.get('cf_hp_check')) {
    console.warn('Contact form honeypot triggered; message dropped')
    return { status: 'success', message: "Thanks! I'll get back to you soon." }
  }

  const field = (key: string) => String(formData.get(key) ?? '').trim()
  const data = {
    name: field('name').slice(0, 100),
    email: field('email').slice(0, 200),
    subject: field('subject').slice(0, 150),
    message: field('message').slice(0, 5000),
  }

  const errors: ContactState['errors'] = {}
  if (!data.name) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email.'
  if (!data.subject) errors.subject = 'Please add a subject.'
  if (!data.message) errors.message = 'Please write a message.'
  if (Object.keys(errors).length) return { status: 'error', errors }

  let payload
  try {
    payload = await getPayload({ config })
    await payload.create({ collection: 'messages', data })
  } catch (err) {
    console.error('Contact form failed to save', err)
    return { status: 'error', message: 'Something went wrong. Please try again or email me directly.' }
  }

  // Notify by email only after the save has committed, so a slow or failing SMTP server can't lose the message
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER
  if (to) {
    try {
      await payload.sendEmail({
        to,
        replyTo: data.email,
        subject: `Portfolio message: ${data.subject}`,
        text: `From: ${data.name} <${data.email}>\nSubject: ${data.subject}\n\n${data.message}`,
      })
    } catch (err) {
      console.error('Contact notification email failed', err)
    }
  }

  return { status: 'success', message: "Thanks! I'll get back to you soon." }
}
