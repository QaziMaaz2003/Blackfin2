import { Link } from 'react-router-dom'
import { Section, Row, Column } from '../components/divi'
import { Blurb, Button, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import {
  benefits,
  brand,
  contracting,
  cost,
  hero,
  images,
  midCta,
  mission,
  partner,
  partnerCopy,
  problem,
  products,
  stats,
  steps,
} from '../content/site'
import { CheckList, CtaBanner, Split, StatsBand } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

/** Divi: Fullwidth Header / Section with background image, gradient overlay, Text + Button modules. */
function Hero() {
  const [before, after] = hero.title.split(hero.accent)
  return (
    <Section tone="image" bgImage={images.hero} padding="lg" className="bf-hero" id="top">
      <Row layout="2_3,1_3" align="center">
        <Column>
          <div className="bf-hero_content" data-reveal>
            <p className="bf-badge">
              <Icon name="shield" size={16} /> {hero.badge}
            </p>
            <h1>
              {before}
              <em>{hero.accent}</em>
              {after}
            </h1>
            <p className="bf-hero_lead">{hero.lead}</p>
            <p className="bf-hero_text">{hero.text}</p>
            <div className="bf-hero_actions">
              <Button href={hero.primary.href} variant="primary">
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="ghost">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </Column>
        <Column>
          <aside className="bf-hero_card" data-reveal>
            <h3>Why agencies choose us</h3>
            <ul>
              {hero.points.map((p) => (
                <li key={p}>
                  <span className="bf-checklist_icon">
                    <Icon name="check" size={16} />
                  </span>
                  {p}
                </li>
              ))}
              <li>
                <span className="bf-checklist_icon">
                  <Icon name="check" size={16} />
                </span>
                Free 30-minute, no-pressure session
              </li>
            </ul>
          </aside>
        </Column>
      </Row>
    </Section>
  )
}

/** Divi: Section > Row 4_4 Heading, Row 1_4x4 Blurb modules. */
function Problem() {
  return (
    <Section tone="alt" id="problem">
      <Row>
        <Column>
          <Heading eyebrow={problem.eyebrow} title={problem.title} />
          <div className="bf-prose bf-prose--center" data-reveal>
            {problem.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="bf-subhead" data-reveal>
            {problem.choicesTitle}
          </h3>
        </Column>
      </Row>
      <Row layout="1_4,1_4,1_4,1_4">
        {problem.choices.map((c) => (
          <Column key={c.title}>
            <Blurb icon={c.icon} title={c.title} text={c.text} />
          </Column>
        ))}
      </Row>
      <Row>
        <Column>
          <div className="bf-prose bf-prose--center bf-prose--strong" data-reveal>
            {problem.closing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Column>
      </Row>
    </Section>
  )
}

function Partner() {
  return (
    <Split eyebrow={partner.eyebrow} title={partner.title} image={images.team} imageAlt="Government team collaborating around a laptop">
      {partnerCopy.text.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h3 className="bf-subhead bf-subhead--left">{partnerCopy.trustTitle}</h3>
      <CheckList items={partnerCopy.trust} />
    </Split>
  )
}

/** Divi: three Blurb modules with a number, + Button module each. */
function Steps() {
  return (
    <Section tone="alt" id="how-it-works">
      <Row>
        <Column>
          <Heading eyebrow={steps.eyebrow} title={steps.title} text={steps.text} />
        </Column>
      </Row>
      <Row layout="1_3,1_3,1_3">
        {steps.items.map((s) => (
          <Column key={s.number}>
            <div className="bf-step" data-reveal>
              <span className="bf-step_number">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Button href={s.cta.href} variant="outline">
                {s.cta.label}
              </Button>
            </div>
          </Column>
        ))}
      </Row>
    </Section>
  )
}

/** Divi: Row 1_2,1_2 — left list of risks (red X), right list of benefits (green check). */
function CostVsBenefit() {
  return (
    <Section>
      <Row layout="1_2,1_2">
        <Column>
          <div className="bf-panel bf-panel--bad" data-reveal>
            <Heading align="left" eyebrow={cost.eyebrow} title={cost.title} text={cost.text} />
            <CheckList items={cost.items} tone="bad" />
          </div>
        </Column>
        <Column>
          <div className="bf-panel bf-panel--good" data-reveal>
            <Heading align="left" eyebrow={benefits.eyebrow} title={benefits.title} text={benefits.text} />
            <CheckList items={benefits.items} />
            <div className="bf-panel_cta">
              <Button href={brand.schedule} variant="primary">
                Schedule Your Free Session
              </Button>
            </div>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Divi: Section with 3 Blurb modules (contract vehicles). */
function Contracting() {
  return (
    <Section tone="alt" id="contracting">
      <Row>
        <Column>
          <Heading eyebrow={contracting.eyebrow} title={contracting.title} text={contracting.text} />
        </Column>
      </Row>
      <Row layout="1_3,1_3,1_3">
        {contracting.vehicles.map((v) => (
          <Column key={v.title}>
            <Blurb icon={v.icon} title={v.title} text={v.text} />
          </Column>
        ))}
      </Row>
      <Row>
        <Column>
          <div className="bf-center" data-reveal>
            <p className="bf-note">{contracting.note}</p>
            <Button href={contracting.cta.href} variant="primary">
              {contracting.cta.label}
            </Button>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

/** Divi: Blog-style grid of Blurb modules with image — teaser for the Platforms page. */
function ProductTeaser() {
  return (
    <Section id="platforms">
      <Row>
        <Column>
          <Heading eyebrow={products.eyebrow} title={products.title} text="Pre-configured products for local government, built on open, vendor-independent platforms." />
        </Column>
      </Row>
      <Row layout="1_2,1_2">
        {products.items.map((p) => (
          <Column key={p.slug}>
            <Blurb icon={p.icon} image={p.image} title={p.title} text={p.summary} />
          </Column>
        ))}
      </Row>
      <Row>
        <Column>
          <div className="bf-center" data-reveal>
            <Button href="/platforms" variant="outline">
              View all platforms
            </Button>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

function Mission() {
  return (
    <Section tone="dark" className="bf-mission">
      <Row layout="1_2,1_2" align="center">
        <Column>
          <Heading align="left" invert eyebrow={mission.eyebrow} title="Every Agency Deserves Software That Fits" />
        </Column>
        <Column>
          <div className="bf-prose bf-prose--invert" data-reveal>
            <p className="bf-prose_lead">{mission.lead}</p>
            <Link className="bf-link" to="/about">
              Read our mission <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Column>
      </Row>
    </Section>
  )
}

export default function Home() {
  usePageMeta('Software Made for the Way You Work')
  return (
    <>
      <Hero />
      <Problem />
      <Partner />
      <StatsBand items={stats} />
      <Steps />
      <CtaBanner title={midCta.title} text={midCta.text} button={midCta.button} note={midCta.note} />
      <CostVsBenefit />
      <Contracting />
      <ProductTeaser />
      <Mission />
    </>
  )
}
