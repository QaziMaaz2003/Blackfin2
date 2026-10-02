import { Section, Row, Column } from '../components/divi'
import { Button, Heading } from '../components/modules'
import { Icon } from '../components/modules/Icon'
import { blog, images } from '../content/site'
import { blogFeatured, blogMore, blogTopics, subscribe } from '../content/extras'
import { PageHero } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

type Post = { title: string; date: string; category: string; image: string; excerpt: string }

function PostCard({ p }: { p: Post }) {
  return (
    <article className="et_pb_post" data-reveal>
      <div className="et_pb_image_container">
        <img src={p.image} alt="" loading="lazy" />
        <span className="bf-post_cat">{p.category}</span>
      </div>
      <div className="et_pb_post_body">
        <p className="post-meta">{p.date}</p>
        <h3 className="entry-title">{p.title}</h3>
        <p>{p.excerpt}</p>
        <span className="more-link">
          Read more <Icon name="arrow" size={14} />
        </span>
      </div>
    </article>
  )
}

/** Divi: Blog module (Grid layout, 3 columns) — fed by WordPress Posts after migration. */
export default function Blog() {
  usePageMeta('Blog')
  const posts: Post[] = [...blog.posts, ...blogMore]
  return (
    <>
      <PageHero eyebrow={blog.eyebrow} title={blog.title} text={blog.text} image={images.desk} />

      {/* Featured post: Divi Blog module (Fullwidth layout, 1 post) or a Row 1_2,1_2 with Image + Text */}
      <Section>
        <Row layout="1_2,1_2" align="center">
          <Column>
            <div className="et_pb_image et_pb_image--frame bf-frame" data-reveal>
              <img src={blogFeatured.image} alt="" loading="lazy" />
              <span className="bf-chip bf-chip--tl">
                <span className="bf-chip_icon">
                  <Icon name="star" size={16} />
                </span>
                Featured
              </span>
            </div>
          </Column>
          <Column>
            <div className="et_pb_text" data-reveal>
              <p className="et_pb_eyebrow">
                {blogFeatured.category} · {blogFeatured.date}
              </p>
              <h2 className="bf-featured_title">{blogFeatured.title}</h2>
              <p className="et_pb_lead">{blogFeatured.excerpt}</p>
              <span className="more-link">
                Read the guide <Icon name="arrow" size={14} />
              </span>
            </div>
          </Column>
        </Row>
      </Section>

      <Section tone="alt">
        <Row>
          <Column>
            <Heading title="Latest Posts" text={blog.note} />
            <ul className="bf-pills bf-pills--filters" data-reveal aria-label="Topics">
              {blogTopics.map((t, i) => (
                <li key={t} className={i === 0 ? 'is-active' : ''}>
                  {t}
                </li>
              ))}
            </ul>
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3">
          {posts.slice(0, 3).map((p) => (
            <Column key={p.title}>
              <PostCard p={p} />
            </Column>
          ))}
        </Row>
        <Row layout="1_3,1_3,1_3">
          {posts.slice(3).map((p) => (
            <Column key={p.title}>
              <PostCard p={p} />
            </Column>
          ))}
        </Row>
      </Section>

      {/* Divi: Email Optin module (connect to Mailchimp / ConvertKit) */}
      <Section tone="dark" padding="md" className="bf-cta">
        <Row>
          <Column>
            <Heading invert title={subscribe.title} text={subscribe.text} />
            <div className="bf-cta_action" data-reveal>
              <Button href={subscribe.href} variant="primary">
                {subscribe.button}
              </Button>
            </div>
          </Column>
        </Row>
      </Section>
    </>
  )
}
