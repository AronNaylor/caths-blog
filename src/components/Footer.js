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
    <footer className="flex flex-row justify-center pb-1 bg-blue-700 text-white">
      <p>Sunshine Cray</p>
      <p className="font-semibold">
        {data.site.siteMetadata.author} &copy; {data.site.siteMetadata.date}{" "}
      </p>
    </footer>
  )
}