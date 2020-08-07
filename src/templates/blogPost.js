import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Row, Col, Image } from "react-bootstrap"

export const postData = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD YYYY")
      childContentfulBlogPostContentRichTextNode {
        json
      }
    }
  }
`

export default function BlogPost(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return (
          <Row>
            <Col
              xs={12}
              md={{ offset: 1, span: 10 }}
              lg={{ offset: 2 }}
              xl={{ offset: 3 }}
            >
              <Image alt={alt} src={url} fluid rounded />
            </Col>
          </Row>
        )
      },
    },
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
              {props.data.contentfulBlogPost.title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              {props.data.contentfulBlogPost.publishedDate}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {documentToReactComponents(
              props.data.contentfulBlogPost
                .childContentfulBlogPostContentRichTextNode.json,
              options
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
