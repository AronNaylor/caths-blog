import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image/index"

function IndexPage() {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "about" } }) {
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

  const imgArr = images.allFile.edges.map(
    image => image.node.childImageSharp.fluid
  )

  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Col xs={12} style={{ textAlign: "center", paddingBottom: "25px" }}>
          <h1 style={{ fontWeight: "bold" }}>Welcome!</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={{ span: 4, offset: 4 }}>
          <Img fluid={imgArr[1]} alt={"About page photo 2"} />
        </Col>
      </Row>
      <Row style={{ paddingTop: "25px" }}>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <p>
            I'm Cath, and I've been keen to see as much of the world from as
            long as I can remember. I've written extensively since I was 18
            years old venturing on my first long haul trip to India and beyond,
            but using old school pen and paper. As the pencil starts to fade in
            the diaries I've kept hold of for nearly a decade (eeek) I thought
            I'd better transfer it online, however I have some serious catching
            up to do.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <p>
            At <b>29</b>, I have visited <b>29</b> countries.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <p>
            I plan to see a lot more, so best endeavors to get this blog up to
            date and I can continue capturing memories from the far corners of
            the world to avoid forgetting all the wonderful people,
            places,beaches and tales along the way.
          </p>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
