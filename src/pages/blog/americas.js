import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

function Americas() {

  const blogData = useStaticQuery(graphql`
      query {
          allContentfulBlogPost(filter: {tag: {eq: "south america"}}) {
              edges {
                  node {
                      title
                      slug
                      tag
                      publishedDate
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


export default Americas
