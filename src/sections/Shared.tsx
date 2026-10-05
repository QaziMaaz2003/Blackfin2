import type { CSSProperties, ReactNode } from 'react'
import { Section, Row, Column } from '../components/divi'
import { Button, Counter, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'

/* Reusable blocks — each is a Divi Library layout (Divi > Divi Library > Add New Layout). */

/**
 * Page hero: Fullwidth Header module with background image + navy overlay.
 * Fills the first screen (Divi: Section > Sizing > Min Height 100vh minus the header) with the content centered.
 */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  chips,
}: {
  eyebrow: string
  title: ReactNode
  text: string
  image: string
  chips?: string[]
}) {
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
      {chips && (
        <ul className="bf-hero_chips" data-reveal>
          {chips.map((c) => (
            <li key={c}>
              <Icon name="check" size={14} /> {c}
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

/** Image module with floating "UI chip" overlays (Divi: Image module + absolutely-positioned Blurb/Text via Position options). */
export function ImageFrame({ src, alt, chips }: { src: string; alt: string; chips?: { icon: string; label: string }[] }) {
  return (
    <div className="et_pb_image et_pb_image--frame bf-frame" data-reveal>
      <img src={src} alt={alt} loading="lazy" />
      {chips?.map((c, i) => (
        <span key={c.label} className={`bf-chip bf-chip--${i % 2 ? 'br' : 'tl'}`}>
          <span className="bf-chip_icon">
            <Icon name={c.icon} size={16} />
          </span>
          {c.label}
        </span>
      ))}
    </div>
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
  chips,
}: {
  eyebrow: string
  title: ReactNode
  children: ReactNode
  image: string
  imageAlt: string
  reverse?: boolean
  tone?: 'light' | 'alt'
  chips?: { icon: string; label: string }[]
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
          <ImageFrame src={image} alt={imageAlt} chips={chips} />
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

/** Horizontal timeline: Row of Blurb-style columns joined by a line (Divi: Row 1_5 x5 + Divider). */
export function Timeline({ items }: { items: { icon: string; label: string; title: string; text: string }[] }) {
  return (
    <ol className="bf-timeline" style={{ '--n': items.length } as CSSProperties}>
      {items.map((t, i) => (
        <li key={t.title} className="bf-timeline_item" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
          <span className="bf-timeline_dot">
            <Icon name={t.icon} size={22} />
          </span>
          <span className="bf-timeline_label">{t.label}</span>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </li>
      ))}
    </ol>
  )
}

/** Dark band of text facts: Row 1_4 x4 of Number Counter modules using the "text" option. */
export function FactBand({ items }: { items: { text: string; label: string }[] }) {
  return (
    <Section tone="dark" padding="sm" className="bf-stats">
      <Row layout="1_4,1_4,1_4,1_4">
        {items.map((f) => (
          <Column key={f.label}>
            <Counter text={f.text} label={f.label} />
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Illustrative speed comparison: Divi Bar Counter module (one bar per path). */
export function SpeedBars({ bars }: { bars: { label: string; value: string; width: number; tone: string }[] }) {
  return (
    <div className="bf-bars" data-reveal>
      {bars.map((b) => (
        <div className="bf-bar" key={b.label}>
          <div className="bf-bar_head">
            <span>{b.label}</span>
            <b>{b.value}</b>
          </div>
          <div className="bf-bar_track">
            <span className={`bf-bar_fill bf-bar_fill--${b.tone}`} style={{ width: `${b.width}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
