'use client'

import { useActionState } from 'react'

import { sendMessage, type ContactState } from '@/app/(frontend)/actions'

const initialState: ContactState = { status: 'idle' }

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(sendMessage, initialState)
  const errors = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div className="contact-form__done" role="status">
        <i className="bi bi-envelope-check"></i>
        <h3>Message received</h3>
        <p>{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="contact-form" noValidate>
      {/* Honeypot, hidden from people. The name must not look like a real field ("website", "url"...),
          or browsers and password managers autofill it and real messages get dropped as spam. */}
      <input type="text" name="cf_hp_check" tabIndex={-1} autoComplete="new-password" className="contact-form__trap" aria-hidden="true" />

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" className="form-control" autoComplete="name" required aria-invalid={!!errors.name} />
          {errors.name && <small className="contact-form__error">{errors.name}</small>}
        </div>
        <div className="col-md-6">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" className="form-control" autoComplete="email" required aria-invalid={!!errors.email} />
          {errors.email && <small className="contact-form__error">{errors.email}</small>}
        </div>
        <div className="col-12">
          <label htmlFor="cf-subject">Subject</label>
          <input id="cf-subject" name="subject" className="form-control" required aria-invalid={!!errors.subject} />
          {errors.subject && <small className="contact-form__error">{errors.subject}</small>}
        </div>
        <div className="col-12">
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows={6} className="form-control" required aria-invalid={!!errors.message} />
          {errors.message && <small className="contact-form__error">{errors.message}</small>}
        </div>
      </div>

      {state.message && state.status === 'error' && (
        <p className="contact-form__error mt-3" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className="jh-btn mt-4" disabled={pending}>
        <i className={`bi ${pending ? 'bi-hourglass-split' : 'bi-send'}`}></i>
        {pending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm
