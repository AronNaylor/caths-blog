import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  date
                  author
              }
          }
      }
  `)

  return (
    <footer>
      <p>Sunshine Cray</p>
      <p>
        {data.site.siteMetadata.author} &copy; {data.site.siteMetadata.date}{" "}
      </p>
    </footer>
  )
}