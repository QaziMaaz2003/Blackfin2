import { Section, Row, Column } from '../components/divi'
import { Blurb, Heading } from '../components/modules'
import { everyProduct, preVsCustom, productExtras } from '../content/extras'
import { Icon } from '../components/modules/Icon'
import { customBuild, images, products } from '../content/site'
import { CtaBanner, ImageFrame, PageHero } from '../sections/Shared'
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
              <p className="bf-forteams" data-reveal>
                <Icon name="users" size={16} /> <b>Built for:</b> {productExtras[p.slug].forTeams}
              </p>
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
              <ul className="bf-tags" data-reveal>
                {productExtras[p.slug].outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Column>
            <Column>
              <ImageFrame src={p.image} alt={p.title} chips={productExtras[p.slug].chips} />
            </Column>
          </Row>
        </Section>
      ))}

      <Section>
        <Row>
          <Column>
            <Heading eyebrow={everyProduct.eyebrow} title={everyProduct.title} />
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3">
          {everyProduct.items.slice(0, 3).map((c) => (
            <Column key={c.title}>
              <Blurb icon={c.icon} title={c.title} text={c.text} />
            </Column>
          ))}
        </Row>
        <Row layout="1_3,1_3,1_3">
          {everyProduct.items.slice(3).map((c) => (
            <Column key={c.title}>
              <Blurb icon={c.icon} title={c.title} text={c.text} />
            </Column>
          ))}
        </Row>
      </Section>

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

      <Section tone="alt">
        <Row>
          <Column>
            <Heading eyebrow={preVsCustom.eyebrow} title={preVsCustom.title} />
          </Column>
        </Row>
        <Row layout="1_2,1_2">
          {preVsCustom.options.map((o, i) => (
            <Column key={o.title}>
              <div className={`bf-option ${i === 0 ? 'bf-option--feature' : ''}`} data-reveal>
                <span className="et_pb_main_blurb_image">
                  <Icon name={o.icon} size={26} />
                </span>
                <p className="bf-option_tag">{o.tag}</p>
                <h3>{o.title}</h3>
                <ul className="bf-checklist bf-checklist--good">
                  {o.points.map((pt) => (
                    <li key={pt}>
                      <span className="bf-checklist_icon">
                        <Icon name="check" size={16} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Column>
          ))}
        </Row>
      </Section>

      <CtaBanner title={products.cta.title} text={products.cta.text} button={products.cta.button} />
    </>
  )
}
