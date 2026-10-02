import { useState, type FormEvent } from 'react'
import { Section, Row, Column } from '../components/divi'
import { Button, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { brand, contact, images } from '../content/site'
import { PageHero } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

/**
 * Divi: Contact Form module. This React form is front-end only and hands the message to the visitor's
 * email app; replace it with the Divi Contact Form module (emails go to contracts@blackfincloud.com).
 */
function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = ['Name', 'Agency', 'Email', 'Phone'].map((k) => `${k}: ${d.get(k)}`).join('\n') + `\n\n${d.get('Message')}`
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent('Website inquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="et_pb_contact_form" onSubmit={onSubmit}>
      <h3>{contact.form.title}</h3>
      <div className="et_pb_contact_grid">
        {contact.form.fields.map((f) => (
          <label key={f} className="et_pb_contact_field">
            <span>{f}</span>
            <input name={f} type={f === 'Email' ? 'email' : f === 'Phone' ? 'tel' : 'text'} required={f !== 'Phone'} />
          </label>
        ))}
      </div>
      <label className="et_pb_contact_field">
        <span>{contact.form.messageLabel}</span>
        <textarea name="Message" rows={5} required />
      </label>
      <button className="et_pb_button et_pb_button--primary" type="submit">
        {contact.form.submit}
      </button>
      {sent && <p className="et_pb_contact_success">Your email app should open with the message ready to send.</p>}
    </form>
  )
}

export default function Contact() {
  usePageMeta('Contact Us')
  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} text={contact.text} image={images.handshake} />
      <Section tone="alt">
        <Row layout="1_3,2_3">
          <Column>
            <Heading align="left" title="Get in touch" />
            <div className="bf-contact_cards">
              {contact.cards.map((c) => (
                <div className="bf-contact_card" key={c.label} data-reveal>
                  <span className="et_pb_main_blurb_image">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <div>
                    <b>{c.label}</b>
                    {c.href ? <a href={c.href}>{c.value}</a> : <span>{c.value}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="bf-contact_book" data-reveal>
              <p>Prefer to pick a time?</p>
              <Button href={brand.schedule} variant="primary">
                Book a free 30-minute session
              </Button>
            </div>
          </Column>
          <Column>
            <ContactForm />
          </Column>
        </Row>
      </Section>
    </>
  )
}
