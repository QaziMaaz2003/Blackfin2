import { Section, Row, Column } from '../components/divi'
import { Blurb, Heading } from '../components/modules'
import { aboutBand, brand, convictions, differences, images, mission, partnerCopy } from '../content/site'
import { aboutFacts, approach, gallery } from '../content/extras'
import { CheckList, CtaBanner, FactBand, PageHero, Split, Timeline } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

export default function About() {
  usePageMeta('About Us')
  return (
    <>
      <PageHero eyebrow="About Us" title="Technology Built for the People Who Serve Your Community" text={mission.lead} image={images.city} />

      <FactBand items={aboutFacts} />

      <Split eyebrow={mission.eyebrow} title={mission.title} image={images.workshop} imageAlt="Team workshop planning a software solution" chips={[{ icon: 'heart', label: 'Built for local government' }, { icon: 'dollar', label: 'Savings passed to you' }]}>
        <p>{mission.text}</p>
      </Split>

      <Section>
        <Row>
          <Column>
            <Heading eyebrow="Three Convictions" title="What We Believe" />
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3">
          {convictions.map((c) => (
            <Column key={c.title}>
              <Blurb icon={c.icon} title={c.title} text={c.text} />
            </Column>
          ))}
        </Row>
      </Section>

      <Section tone="alt">
        <Row>
          <Column>
            <Heading eyebrow={approach.eyebrow} title={approach.title} text={approach.text} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Timeline items={approach.items.map((a, i) => ({ icon: a.icon, label: `Step ${i + 1}`, title: a.title, text: a.text }))} />
          </Column>
        </Row>
      </Section>

      <Split tone="alt" eyebrow="Why Government" title="Why We Built This for Government" image={images.meeting} imageAlt="Public sector team in a meeting" reverse>
        <p>
          Most technology consultants make more money when your project is more complex, takes longer, and requires more of their hours. We built Blackfin Cloud Services differently — to move fast and pass the savings to you.
        </p>
        <CheckList items={partnerCopy.trust} />
      </Split>

      <Section tone="alt">
        <Row>
          <Column>
            <Heading eyebrow={differences.eyebrow} title={differences.title} />
          </Column>
        </Row>
        <Row layout="1_4,1_4,1_4,1_4">
          {differences.items.map((d) => (
            <Column key={d.title}>
              <Blurb icon={d.icon} title={d.title} text={d.text} />
            </Column>
          ))}
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <Heading eyebrow={gallery.eyebrow} title={gallery.title} />
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3">
          {gallery.items.map((g) => (
            <Column key={g.caption}>
              <figure className="bf-figure" data-reveal>
                <img src={g.image} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            </Column>
          ))}
        </Row>
      </Section>

      <Section tone="dark" padding="md">
        <Row>
          <Column>
            <Heading invert title={aboutBand.title} text={aboutBand.text} />
          </Column>
        </Row>
      </Section>

      <CtaBanner title="Let’s Talk About Your Agency" text="Book a free 30-minute session. No pressure, no jargon." button={{ label: 'Schedule a Call', href: brand.schedule }} />
    </>
  )
}
