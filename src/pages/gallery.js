import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Col, Row, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Gallery() {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  //const imgArr = images.allFile.edges.map(image => image.node.childImageSharp.fluid)

  return (
    <Layout>
      <SEO title="Gallery" />
      <Row style={{ paddingBottom: "25px" }}>
        <Col xs={12}>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Gallery</h1>
        </Col>
      </Row>
      <Row>
        {images.allFile.edges.map(image => {
          return (
            <Col xs={12} md={6} lg={4} style={{ paddingBottom: "25px" }}>
              <Img fluid={image.node.childImageSharp.fluid} />
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default Gallery
