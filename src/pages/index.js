import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import cta from '/src/images/cta.jpg'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="PPI Kyoto-Shiga" />

      <div className="grid grid-cols-1 gap-16">
        {/* CTA */}
        <div className="bg-secondary m-12">
          <div className="relative grid grid-cols-5 mx-auto px-4 py-12 sm:py-36 max-w-6xl">
            <div className="bg-white col-span-3 p-16 z-10">
              <h2 className="sm:text-5xl text-2xl font-bold mb-8">
              PPI Kyoto-Shiga
              </h2>
              <p className="text-sm sm:text-lg">Persatuan Pelajar Indonesia di Kyoto dan Shiga periode kepengurusan 2021/2022.</p>
              <button className="bg-primary hover:bg-secondary text-white text-md sm:text-md font-medium my-4 py-2 px-4 rounded-lg"><Link to="/#contact">Tentang kami</Link></button>
            </div>
            <div className="absolute py-16 z-0 inset-y-0 right-0 items-center">
                <img src={cta} className="h-full items-center" alt="cta"/>
            </div>
          </div>
        </div>

        {/* Informasi terbaru */}
        <div className="max-w-6xl mx-auto md:px-6 px-4 py-8">
          <div className="mb-8 pb-4 border-b-2 flex justify-between items-center">
            <h2 className="md:text-4xl text-2xl font-semibold flex">📝 Informasi Terbaru</h2>
            <div className="flex">
              <Link to="/blog" className="sm:text-md text-sm text-gray-600 p-4">Read all posts →</Link>
            </div>
          </div>
          
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h3 className="text-gray-800 md:text-2xl text-xl">
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h3>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section className="pb-8">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
        
        
        {/* Tentang PPI Kyoto-Shiga */}
        <div className="max-w-6xl mx-auto md:px-6 px-4 py-8">
          <h2 className="md:text-4xl text-2xl font-semibold mb-8 pb-4 border-b-2">👥 Tentang PPI Kyoto-Shiga</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a. Nibh tellus molestie nunc non blandit massa. Potenti nullam ac tortor vitae. Ac feugiat sed lectus vestibulum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Eu lobortis elementum nibh tellus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Eget egestas purus viverra accumsan in. Odio eu feugiat pretium nibh ipsum. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
          </p>
        </div>
        
      </div>
      
      
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
