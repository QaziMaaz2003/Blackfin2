import { useState } from 'react'
import { Section, Row, Column } from '../components/divi'
import { Button, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { brand, images } from '../content/site'
import { capabilityContent } from '../content/capability'
import { PageHero } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

export default function CapabilityStatement() {
  usePageMeta('Capability Statement')

  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [activeCodeTab, setActiveCodeTab] = useState<'naics' | 'unspsc'>('naics')

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const {
    summary,
    companyOverview,
    primaryContact,
    companyData,
    pastPerformance,
    coreCompetencies,
    differentiators,
  } = capabilityContent

  return (
    <div className="bf-capability-page">
      {/* Hero Header */}
      <PageHero
        eyebrow="Government Contracting & Procurement"
        title={
          <>
            Blackfin Cloud Services <em>Capability Statement</em>
          </>
        }
        text={summary.lead}
        image={images.planning}
        chips={[
          `CMAS Contract: ${companyData.cmas}`,
          'CA Small Business Certified',
          `CAGE: ${companyData.cage}`,
          `UEI: ${companyData.eui}`,
          companyOverview.location,
        ]}
      />

      {/* Quick Action Ribbon & Official Procurement Identifiers Band */}
      <section className="bf-cap-ribbon-bar">
        <div className="bf-cap-ribbon-container">
          <div className="bf-cap-ids-scroll" data-reveal>
            <button
              type="button"
              className="bf-cap-id-chip"
              onClick={() => handleCopy(companyData.cmas, 'cmas')}
              title="Click to copy CMAS Contract"
            >
              <span className="bf-cap-id-label">CMAS</span>
              <span className="bf-cap-id-val">
                {companyData.cmas}
                <Icon name={copiedKey === 'cmas' ? 'check' : 'copy'} size={12} />
              </span>
            </button>
            <button
              type="button"
              className="bf-cap-id-chip"
              onClick={() => handleCopy(companyData.cage, 'cage')}
              title="Click to copy CAGE Code"
            >
              <span className="bf-cap-id-label">CAGE</span>
              <span className="bf-cap-id-val">
                {companyData.cage}
                <Icon name={copiedKey === 'cage' ? 'check' : 'copy'} size={12} />
              </span>
            </button>
            <button
              type="button"
              className="bf-cap-id-chip"
              onClick={() => handleCopy(companyData.duns, 'duns')}
              title="Click to copy DUNS"
            >
              <span className="bf-cap-id-label">DUNS</span>
              <span className="bf-cap-id-val">
                {companyData.duns}
                <Icon name={copiedKey === 'duns' ? 'check' : 'copy'} size={12} />
              </span>
            </button>
            <button
              type="button"
              className="bf-cap-id-chip"
              onClick={() => handleCopy(companyData.eui, 'uei')}
              title="Click to copy UEI"
            >
              <span className="bf-cap-id-label">UEI</span>
              <span className="bf-cap-id-val">
                {companyData.eui}
                <Icon name={copiedKey === 'uei' ? 'check' : 'copy'} size={12} />
              </span>
            </button>
            <span className="bf-cap-id-chip bf-cap-id-chip--badge">
              <Icon name="shield" size={13} /> CA Small Business (SB)
            </span>
          </div>

          <div className="bf-cap-actions-group" data-reveal>
            <a
              href="/BCS-Capability-Statement.pdf"
              download="BCS_Capability_Statement_2026.pdf"
              className="et_pb_button et_pb_button--primary bf-cap-btn"
            >
              <Icon name="download" size={14} /> Download PDF
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="et_pb_button et_pb_button--outline bf-cap-btn no-print"
            >
              <Icon name="printer" size={14} /> Print Document
            </button>
          </div>
        </div>
      </section>

      {/* Main Capability Document Content Section */}
      <Section tone="alt" padding="md" className="bf-cap-main-section">
        <Row layout="2_3,1_3" align="start" className="bf-cap-layout-row">
          {/* Main Content Column (2/3) */}
          <Column className="bf-cap-main-col">
            {/* Executive Callout Highlight (from top-right card of PDF) */}
            <div className="bf-cap-callout-card" data-reveal>
              <div className="bf-cap-callout-header">
                <span className="bf-badge">
                  <Icon name="shield" size={14} /> {summary.badge}
                </span>
                <span className="bf-cap-location-badge">
                  <Icon name="pin" size={14} /> {companyOverview.location}
                </span>
              </div>
              <p className="bf-cap-callout-lead">{summary.lead}</p>
              <p>{summary.body}</p>
              <p>{summary.conclusion}</p>
              <div className="bf-cap-program-pills">
                {summary.programs.map((p) => (
                  <div key={p.name} className="bf-cap-program-pill">
                    <b>{p.name}</b>
                    <span>{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Overview Section */}
            <article className="bf-cap-panel" data-reveal>
              <div className="bf-cap-panel-header">
                <div className="bf-cap-panel-meta">
                  <p className="et_pb_eyebrow">{companyOverview.eyebrow}</p>
                  <div className="bf-cap-location-pill">
                    <Icon name="pin" size={14} />
                    <span>{companyOverview.location}</span>
                  </div>
                </div>
                <h2>Software Systems Built for Vendor Independence</h2>
              </div>

              <div className="bf-prose">
                <p>{companyOverview.p1}</p>
                <blockquote className="bf-cap-mission-quote">
                  <span className="bf-cap-quote-mark">“</span>
                  <p>{companyOverview.missionQuote}</p>
                </blockquote>
                <p>{companyOverview.p2}</p>
              </div>

              <div className="bf-cap-solutions-block">
                <h4 className="bf-features_title">{companyOverview.examplesLead}</h4>
                <div className="bf-cap-solutions-grid">
                  {companyOverview.examples.map((ex) => (
                    <div key={ex.name} className="bf-cap-solution-item">
                      <span className="bf-checklist_icon">
                        <Icon name="check" size={14} />
                      </span>
                      <div>
                        <strong>{ex.name}</strong>
                        <small>{ex.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Core Competencies & Specific Platforms Section */}
            <article className="bf-cap-panel" data-reveal>
              <div className="bf-cap-panel-header">
                <div>
                  <p className="et_pb_eyebrow">{coreCompetencies.eyebrow}</p>
                  <h2>Technical Capabilities & Platform Expertise</h2>
                </div>
              </div>

              <div className="bf-cap-competency-grid">
                {coreCompetencies.services.map((svc) => (
                  <div key={svc.title} className="bf-cap-competency-card">
                    <span className="bf-cap-comp-icon">
                      <Icon name={svc.icon} size={20} />
                    </span>
                    <div>
                      <h3>{svc.title}</h3>
                      <p>{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specific Platforms Sub-Block */}
              <div className="bf-cap-platforms-subblock">
                <div className="bf-cap-subhead-row">
                  <h3 className="bf-subhead bf-subhead--left">{coreCompetencies.platformsEyebrow}</h3>
                  <span className="bf-cap-sub-tag">Microsoft Certified Ecosystem</span>
                </div>
                <div className="bf-cap-platform-cards">
                  {coreCompetencies.platforms.map((plat) => (
                    <div key={plat.name} className="bf-cap-platform-pill-card">
                      <div className="bf-cap-plat-head">
                        <Icon name="check" size={15} />
                        <strong>{plat.name}</strong>
                      </div>
                      <span className="bf-pill bf-pill--info">{plat.badge}</span>
                      <p>{plat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Past Performance Section */}
            <article className="bf-cap-panel" data-reveal>
              <div className="bf-cap-panel-header">
                <div>
                  <p className="et_pb_eyebrow">{pastPerformance.eyebrow}</p>
                  <h2>Proven Public & Commercial Track Record</h2>
                </div>
              </div>
              <p className="bf-cap-panel-intro">{pastPerformance.intro}</p>

              <div className="bf-cap-perf-split">
                {/* Government Column */}
                <div className="bf-cap-perf-col">
                  <div className="bf-cap-perf-head bf-cap-perf-head--gov">
                    <Icon name="shield" size={18} />
                    <div>
                      <h3>Government</h3>
                      <small>State, County, Municipal, & Public Utilities</small>
                    </div>
                  </div>
                  <ul className="bf-cap-perf-list">
                    {pastPerformance.government.map((gov) => (
                      <li key={gov.name} className="bf-cap-perf-item">
                        <div className="bf-cap-perf-item-top">
                          <span className="bf-cap-dot bf-cap-dot--gov" />
                          <span className="bf-cap-perf-name">{gov.name}</span>
                        </div>
                        <span className="bf-cap-perf-tag">{gov.badge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Commercial Column */}
                <div className="bf-cap-perf-col">
                  <div className="bf-cap-perf-head bf-cap-perf-head--comm">
                    <Icon name="building" size={18} />
                    <div>
                      <h3>Commercial</h3>
                      <small>Global Enterprises, Defense & Media</small>
                    </div>
                  </div>
                  <ul className="bf-cap-perf-list">
                    {pastPerformance.commercial.map((com) => (
                      <li key={com.name} className="bf-cap-perf-item">
                        <div className="bf-cap-perf-item-top">
                          <span className="bf-cap-dot bf-cap-dot--comm" />
                          <span className="bf-cap-perf-name">{com.name}</span>
                        </div>
                        <span className="bf-cap-perf-tag">{com.badge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* Differentiators Section */}
            <article className="bf-cap-panel" data-reveal>
              <div className="bf-cap-panel-header">
                <div>
                  <p className="et_pb_eyebrow">{differentiators.eyebrow}</p>
                  <h2>What Sets Blackfin Cloud Services Apart</h2>
                </div>
              </div>

              <div className="bf-cap-diff-grid">
                {differentiators.items.map((diff, idx) => (
                  <div key={diff.title} className="bf-cap-diff-card">
                    <div className="bf-cap-diff-icon-wrap">
                      <Icon name={diff.icon} size={22} />
                      <span className="bf-cap-diff-num">0{idx + 1}</span>
                    </div>
                    <h3>{diff.title}</h3>
                    <p>{diff.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </Column>

          {/* Right Sidebar Column (1/3) */}
          <Column className="bf-cap-sidebar-col">
            <aside className="bf-cap-sidebar">
              {/* Primary Contact Card */}
              <div className="bf-cap-sidebar-card bf-cap-contact-card" data-reveal>
                <div className="bf-cap-card-title-bar">
                  <Icon name="users" size={18} />
                  <h3>{primaryContact.eyebrow}</h3>
                </div>

                <div className="bf-cap-contact-body">
                  <div className="bf-cap-contact-avatar">
                    <span className="bf-cap-initials">OS</span>
                    <div>
                      <h4>{primaryContact.name}</h4>
                      <p className="bf-cap-contact-role">{primaryContact.role}</p>
                    </div>
                  </div>

                  <ul className="bf-cap-contact-details">
                    <li>
                      <Icon name="phone" size={16} />
                      <div>
                        <span className="bf-cap-detail-label">Direct Phone</span>
                        <a href={primaryContact.phoneHref} className="bf-cap-detail-val">
                          {primaryContact.phone}
                        </a>
                      </div>
                    </li>
                    <li>
                      <Icon name="mail" size={16} />
                      <div>
                        <span className="bf-cap-detail-label">Contracting Inquiries</span>
                        <a href={primaryContact.emailHref} className="bf-cap-detail-val">
                          {primaryContact.email}
                        </a>
                      </div>
                    </li>
                    <li>
                      <Icon name="globe" size={16} />
                      <div>
                        <span className="bf-cap-detail-label">Official Website</span>
                        <a
                          href={primaryContact.websiteHref}
                          target="_blank"
                          rel="noreferrer"
                          className="bf-cap-detail-val"
                        >
                          {primaryContact.website}
                        </a>
                      </div>
                    </li>
                    <li>
                      <Icon name="pin" size={16} />
                      <div>
                        <span className="bf-cap-detail-label">Headquarters Location</span>
                        <span className="bf-cap-detail-val">{primaryContact.location}</span>
                        <small className="bf-cap-sub-addr">{primaryContact.fullAddress}</small>
                      </div>
                    </li>
                  </ul>

                  <div className="bf-cap-contact-action">
                    <Button href={brand.schedule} variant="primary">
                      Schedule a Working Session
                    </Button>
                  </div>
                </div>
              </div>

              {/* Company Data & Codes Card */}
              <div className="bf-cap-sidebar-card bf-cap-data-card" data-reveal>
                <div className="bf-cap-card-title-bar">
                  <Icon name="doc" size={18} />
                  <h3>{companyData.eyebrow}</h3>
                </div>

                <div className="bf-cap-data-body">
                  <div className="bf-cap-data-table">
                    <div className="bf-cap-data-row">
                      <span className="bf-cap-data-key">Contract Vehicle</span>
                      <strong className="bf-cap-data-badge">CMAS {companyData.cmas}</strong>
                    </div>
                    <div className="bf-cap-data-row">
                      <span className="bf-cap-data-key">Certification</span>
                      <span className="bf-cap-data-pill">CA Small Business</span>
                    </div>
                    <div className="bf-cap-data-row">
                      <span className="bf-cap-data-key">CAGE Code</span>
                      <code className="bf-cap-code-val">{companyData.cage}</code>
                    </div>
                    <div className="bf-cap-data-row">
                      <span className="bf-cap-data-key">DUNS Number</span>
                      <code className="bf-cap-code-val">{companyData.duns}</code>
                    </div>
                    <div className="bf-cap-data-row">
                      <span className="bf-cap-data-key">EUI / UEI</span>
                      <code className="bf-cap-code-val">{companyData.eui}</code>
                    </div>
                  </div>

                  {/* Code Tabs: NAICS & UNSPSC */}
                  <div className="bf-cap-codes-container">
                    <div className="bf-cap-tabs-nav">
                      <button
                        type="button"
                        className={`bf-cap-tab-btn ${activeCodeTab === 'naics' ? 'is-active' : ''}`}
                        onClick={() => setActiveCodeTab('naics')}
                      >
                        NAICS Codes ({companyData.naics.length})
                      </button>
                      <button
                        type="button"
                        className={`bf-cap-tab-btn ${activeCodeTab === 'unspsc' ? 'is-active' : ''}`}
                        onClick={() => setActiveCodeTab('unspsc')}
                      >
                        UNSPSC Codes ({companyData.unspsc.length})
                      </button>
                    </div>

                    {activeCodeTab === 'naics' ? (
                      <div className="bf-cap-codes-panel">
                        <p className="bf-cap-codes-hint">
                          North American Industry Classification System:
                        </p>
                        <ul className="bf-cap-code-items">
                          {companyData.naics.map((item) => (
                            <li key={item.code} className="bf-cap-code-item">
                              <span
                                className="bf-cap-code-tag"
                                onClick={() => handleCopy(item.code, item.code)}
                                title="Click to copy code"
                              >
                                {item.code}
                                <Icon name={copiedKey === item.code ? 'check' : 'copy'} size={12} />
                              </span>
                              <span className="bf-cap-code-desc">{item.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bf-cap-codes-panel">
                        <p className="bf-cap-codes-hint">
                          United Nations Standard Products & Services Codes:
                        </p>
                        <ul className="bf-cap-code-items">
                          {companyData.unspsc.map((item) => (
                            <li key={item.code} className="bf-cap-code-item">
                              <span
                                className="bf-cap-code-tag"
                                onClick={() => handleCopy(item.code, item.code)}
                                title="Click to copy code"
                              >
                                {item.code}
                                <Icon name={copiedKey === item.code ? 'check' : 'copy'} size={12} />
                              </span>
                              <span className="bf-cap-code-desc">{item.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Download & Fast Procurement Vehicle Card */}
              <div className="bf-cap-sidebar-card bf-cap-procure-card" data-reveal>
                <div className="bf-cap-procure-icon">
                  <Icon name="shield" size={28} />
                </div>
                <h3>Contract Directly via CMAS</h3>
                <p>
                  California state and local government agencies can contract with Blackfin Cloud
                  Services directly without competitive bidding under CMAS schedule{' '}
                  <b>3-24-05-2024</b>.
                </p>
                <a
                  href="/BCS-Capability-Statement.pdf"
                  download="BCS_Capability_Statement_2026.pdf"
                  className="et_pb_button et_pb_button--primary bf-cap-full-btn"
                >
                  <Icon name="download" size={16} /> Download Full Statement (PDF)
                </a>
              </div>
            </aside>
          </Column>
        </Row>
      </Section>

      {/* Bottom Procurement & Scheduling CTA */}
      <Section tone="dark" className="bf-cta">
        <Row>
          <Column>
            <Heading
              invert
              title="Ready to Discuss Your Agency's Capability Needs?"
              text="Contract directly through our California Multiple Award Schedule or schedule a free 30-minute discovery consultation with our technical team."
            />
            <div className="bf-cta_action bf-cap-cta-actions" data-reveal>
              <Button href={brand.schedule} variant="primary">
                Schedule a 30-Minute Session
              </Button>
              <Button href={primaryContact.phoneHref} variant="ghost">
                Call {primaryContact.phone}
              </Button>
            </div>
            <p className="bf-cta_note">
              <span>CMAS Contract: 3-24-05-2024</span>
              <span>CA Small Business Certified</span>
              <span>Headquarters: Redding, CA 96001</span>
            </p>
          </Column>
        </Row>
      </Section>
    </div>
  )
}
