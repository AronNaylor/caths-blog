import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

function Africa() {

  const blogData = useStaticQuery(graphql`
      query {
          allContentfulBlogPost {
              edges {
                  node {
                      title
                      slug
                      tag
                      publishedDate(formatString: "MMMM DD YYYY")
                  }
              }
          }
      }
  `)

  console.log(blogData)

  return (
    <Layout>
      <SEO title="Page two"/>
      <h1>Blog</h1>
      <Link to="/">Go back to the homepage</Link>
      <ol>
        {blogData.allContentfulBlogPost.edges.map(blog => {
          return (
            <li>
              <Link to={`/blog/${blog.node.slug}`}>
                <h2>{blog.node.title}</h2>
              </Link>
              <p>{blog.node.publishedDate}</p>
              <p>{blog.node.tag}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}


export default Africa
