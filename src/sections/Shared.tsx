import type { ReactNode } from 'react'
import { Section, Row, Column } from '../components/divi'
import { Button, Counter, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'

/* Reusable blocks — each is a Divi Library layout (Divi > Divi Library > Add New Layout). */

/** Page hero: Fullwidth Header module with background image + navy overlay. */
export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: ReactNode; text: string; image: string }) {
  return (
    <Section tone="image" bgImage={image} padding="lg" className="bf-page-hero">
      <Row>
        <Column>
          <div className="et_pb_fullwidth_header_container" data-reveal>
            <p className="et_pb_eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="et_pb_lead">{text}</p>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Text + image split: Row 1_2,1_2 (Text module + Image module). */
export function Split({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  tone = 'light',
}: {
  eyebrow: string
  title: ReactNode
  children: ReactNode
  image: string
  imageAlt: string
  reverse?: boolean
  tone?: 'light' | 'alt'
}) {
  return (
    <Section tone={tone}>
      <Row layout="1_2,1_2" align="center" className={reverse ? 'et_pb_row--reverse' : ''}>
        <Column>
          <Heading align="left" eyebrow={eyebrow} title={title} />
          <div className="et_pb_text" data-reveal>
            {children}
          </div>
        </Column>
        <Column>
          <div className="et_pb_image et_pb_image--frame" data-reveal>
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Check list: Divi Text module with a UL (custom bullet via Design > Text > List Style). */
export function CheckList({ items, tone = 'good' }: { items: string[]; tone?: 'good' | 'bad' }) {
  return (
    <ul className={`bf-checklist bf-checklist--${tone}`}>
      {items.map((t) => (
        <li key={t} data-reveal>
          <span className="bf-checklist_icon">
            <Icon name={tone === 'good' ? 'check' : 'x'} size={16} />
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

/** Navy stats band: Row 1_4 x4 of Number Counter modules. */
export function StatsBand({ items }: { items: { value: number; prefix?: string; suffix?: string; label: string }[] }) {
  return (
    <Section tone="dark" padding="sm" className="bf-stats">
      <Row layout="1_4,1_4,1_4,1_4">
        {items.map((s) => (
          <Column key={s.label}>
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} />
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Closing call-to-action: Section with gradient background + Heading + Button. */
export function CtaBanner({
  title,
  text,
  button,
  note,
}: {
  title: string
  text: string
  button: { label: string; href: string }
  note?: string[]
}) {
  return (
    <Section tone="dark" className="bf-cta">
      <Row>
        <Column>
          <Heading invert title={title} text={text} />
          <div className="bf-cta_action" data-reveal>
            <Button href={button.href} variant="primary">
              {button.label}
            </Button>
            {note && (
              <p className="bf-cta_note">
                {note.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </p>
            )}
          </div>
        </Column>
      </Row>
    </Section>
  )
}
