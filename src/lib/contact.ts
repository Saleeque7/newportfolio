// Opens Gmail's compose window in the browser. A plain mailto: does nothing
// on desktops without a mail app set up.
export const emailHref = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

// wa.me needs the number in international format, digits only.
// 10-digit numbers are treated as Indian (+91).
export const whatsappHref = (phone: string) => {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits.length === 10 ? `91${digits}` : digits}`
}
