import { Section, Row, Column } from '../components/divi'
import { Heading } from '../components/modules'
import { blog, images } from '../content/site'
import { PageHero } from '../sections/Shared'
import { usePageMeta } from '../lib/usePageMeta'

/** Divi: Blog module (Grid layout, 3 columns) — fed by WordPress Posts after migration. */
export default function Blog() {
  usePageMeta('Blog')
  return (
    <>
      <PageHero eyebrow={blog.eyebrow} title={blog.title} text={blog.text} image={images.desk} />
      <Section tone="alt">
        <Row>
          <Column>
            <Heading title="Latest Posts" text={blog.note} />
          </Column>
        </Row>
        <Row layout="1_3,1_3,1_3">
          {blog.posts.map((p) => (
            <Column key={p.title}>
              <article className="et_pb_post" data-reveal>
                <div className="et_pb_image_container">
                  <img src={p.image} alt="" loading="lazy" />
                </div>
                <div className="et_pb_post_body">
                  <p className="post-meta">
                    <span>{p.category}</span> · {p.date}
                  </p>
                  <h3 className="entry-title">{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="more-link">Read more</span>
                </div>
              </article>
            </Column>
          ))}
        </Row>
      </Section>
    </>
  )
}
