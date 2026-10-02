import { Section, Row, Column } from '../components/divi'
import { Blurb, Heading, Toggle } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { brand, compare, faq, images, lowCode, steps } from '../content/site'
import { CtaBanner, PageHero } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

export default function HowLowCode() {
  usePageMeta('How Low-Code Works')
  return (
    <>
      <PageHero eyebrow={lowCode.eyebrow} title={lowCode.title} text={lowCode.lead} image={images.code} />

      <Section>
        <Row>
          <Column>
            <div className="bf-prose bf-prose--center" data-reveal>
              <p>{lowCode.text}</p>
            </div>
          </Column>
        </Row>
        <Row layout="1_4,1_4,1_4,1_4">
          {lowCode.points.map((p) => (
            <Column key={p.title}>
              <Blurb icon={p.icon} title={p.title} text={p.text} />
            </Column>
          ))}
        </Row>
      </Section>

      {/* Divi: Text module containing an HTML table (or Pricing Table / Table Maker plugin) */}
      <Section tone="alt">
        <Row>
          <Column>
            <Heading title={compare.title} />
            <div className="bf-table_wrap" data-reveal>
              <table className="bf-table">
                <thead>
                  <tr>
                    {compare.columns.map((c, i) => (
                      <th key={i} className={i === 3 ? 'is-featured' : ''}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compare.rows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (
                        <td key={i} className={i === 3 ? 'is-featured' : ''}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Column>
        </Row>
      </Section>

      <Section>
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
              </div>
            </Column>
          ))}
        </Row>
      </Section>

      <Section tone="alt">
        <Row layout="1_3,2_3">
          <Column>
            <Heading align="left" eyebrow={faq.eyebrow} title={faq.title} />
            <p className="bf-note" data-reveal>
              <Icon name="mail" size={16} /> Still have a question? <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </p>
          </Column>
          <Column>
            {faq.items.map((f, i) => (
              <Toggle key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </Column>
        </Row>
      </Section>

      <CtaBanner title="See What’s Possible for Your Agency" text="Book a free 30-minute session and leave with clarity, not a contract." button={{ label: 'Schedule a Call', href: brand.schedule }} />
    </>
  )
}
