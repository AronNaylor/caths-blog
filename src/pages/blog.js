import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Blog() {


  return (
    <Layout>
      <SEO title="Page two"/>
      <h1>Blog</h1>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/europe">Europe</Link>
      <Link to="/asia">Asia</Link>
    </Layout>
  )
}


export default Blog
