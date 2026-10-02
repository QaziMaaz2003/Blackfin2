import { Section, Row, Column } from '../components/divi'
import { Blurb, Heading } from '../components/modules'
import { aboutBand, brand, convictions, differences, images, mission, partnerCopy } from '../content/site'
import { CheckList, CtaBanner, PageHero, Split } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

export default function About() {
  usePageMeta('About Us')
  return (
    <>
      <PageHero eyebrow="About Us" title="Technology Built for the People Who Serve Your Community" text={mission.lead} image={images.city} />

      <Split eyebrow={mission.eyebrow} title={mission.title} image={images.workshop} imageAlt="Team workshop planning a software solution">
        <p>{mission.text}</p>
      </Split>

      <Section tone="alt">
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

      <Split eyebrow="Why Government" title="Why We Built This for Government" image={images.meeting} imageAlt="Public sector team in a meeting" reverse>
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
