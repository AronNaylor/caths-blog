import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const postData = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug}) {
            title
            publishedDate
            tag
            images {
                fluid {
                    src
                }
            }
            content {
                json
            }
        }
    }
`

console.log(postData)

export default function BlogPost(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url}/>
      }
    }
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.content.json,
        options
      )}
    </Layout>
  )
}