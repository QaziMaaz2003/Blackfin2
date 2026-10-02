import { Section, Row, Column } from '../components/divi'
import { Blurb, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { customBuild, images, products } from '../content/site'
import { CtaBanner, PageHero } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

export default function Platforms() {
  usePageMeta('Platforms')
  return (
    <>
      <PageHero eyebrow={products.eyebrow} title="Platforms Built for Government" text={products.text} image={images.dashboard} />

      {/* One Section per product: Row 1_2,1_2 (Text + Image), alternating sides */}
      {products.items.map((p, i) => (
        <Section key={p.slug} tone={i % 2 ? 'alt' : 'light'} id={p.slug}>
          <Row layout="1_2,1_2" align="center" className={i % 2 ? 'et_pb_row--reverse' : ''}>
            <Column>
              <Heading align="left" eyebrow={`Product ${String(i + 1).padStart(2, '0')}`} title={p.title} text={p.summary} />
              <p className="bf-features_title" data-reveal>
                Significant features
              </p>
              <ul className="bf-checklist bf-checklist--good">
                {p.features.map((f) => (
                  <li key={f} data-reveal>
                    <span className="bf-checklist_icon">
                      <Icon name="check" size={16} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Column>
            <Column>
              <div className="et_pb_image et_pb_image--frame" data-reveal>
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
            </Column>
          </Row>
        </Section>
      ))}

      <Section tone="dark" padding="sm">
        <Row>
          <Column>
            <p className="bf-banner_note" data-reveal>
              {products.note}
            </p>
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <Heading eyebrow={customBuild.eyebrow} title={customBuild.title} text={customBuild.text} />
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3">
          {customBuild.items.map((c) => (
            <Column key={c.title}>
              <Blurb icon={c.icon} title={c.title} text={c.text} />
            </Column>
          ))}
        </Row>
      </Section>

      <CtaBanner title={products.cta.title} text={products.cta.text} button={products.cta.button} />
    </>
  )
}
