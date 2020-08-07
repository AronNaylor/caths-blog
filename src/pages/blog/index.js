import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import blogStyles from "./blog.module.css"

function Index() {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "blog" } }) {
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

  function getImage(imgArr, name) {
    const re = new RegExp(name)
    return imgArr.filter(img => (img.src.search(re) !== -1 ? img : null))
  }

  const imgArr = images.allFile.edges.map(
    item => item.node.childImageSharp.fluid
  )

  return (
    <Layout>
      <SEO title="Index" />
      <h1 className={blogStyles.title}>Blog</h1>
      <Row>
        <Col xs={12} md={4} className={blogStyles.cardPadding}>
          <Card>
            <Img fluid={getImage(imgArr, "europe")} />
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/europe" className={blogStyles.linkText}>
                <Button variant="dark" style={{ fontWeight: "bold" }}>
                  Europe
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className={blogStyles.cardPadding}>
          <Card>
            <Img fluid={getImage(imgArr, "asia")} />
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/asia" className={blogStyles.linkText}>
                <Button variant="dark" style={{ fontWeight: "bold" }}>
                  Asia
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className={blogStyles.cardPadding}>
          <Card>
            <Img fluid={getImage(imgArr, "samerica")} />
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/americas" className={blogStyles.linkText}>
                <Button variant="dark" style={{ fontWeight: "bold" }}>
                  Americas
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={{ offset: 2, span: 4 }}
          className={blogStyles.cardPadding}
        >
          <Card>
            <Img fluid={getImage(imgArr, "africa")} />
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/africa" className={blogStyles.linkText}>
                <Button variant="dark" style={{ fontWeight: "bold" }}>
                  Africa
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={{ span: 4 }} className={blogStyles.cardPadding}>
          <Card>
            <Img fluid={getImage(imgArr, "aus")} />
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/australia" className={blogStyles.linkText}>
                <Button variant="dark" style={{ fontWeight: "bold" }}>
                  Australia
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Index
