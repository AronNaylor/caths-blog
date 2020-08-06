import React from "react"
import { Link } from "gatsby"
import { Button, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import blogStyles from "./blog.module.css"

function Index() {
  return (
    <Layout>
      <SEO title="Index"/>
      <h1 className={blogStyles.title}>Blog</h1>
      <Row>
        <Col xs={12} md={4} className={blogStyles.cardPadding}>
          <Card>
            <Card.Img variant='top' src={require("../../images/blog/europe.jpg")}/>
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/europe" className={blogStyles.linkText}><Button variant="dark">Europe</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className={blogStyles.cardPadding}>
          <Card>
            <Card.Img variant='top' src={require("../../images/blog/asia.jpg")}/>
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/asia" className={blogStyles.linkText}><Button variant="dark">Asia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className={blogStyles.cardPadding}>
          <Card>
            <Card.Img variant='top' src={require("../../images/blog/samerica.jpg")}/>
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/americas" className={blogStyles.linkText}><Button variant="dark">Americas</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ offset: 2, span: 4 }} className={blogStyles.cardPadding}>
          <Card>
            <Card.Img variant='top' src={require("../../images/blog/africa.jpg")}/>
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/africa" className={blogStyles.linkText}><Button variant="dark">Africa</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={{ span: 4 }} className={blogStyles.cardPadding}>
          <Card>
            <Card.Img variant='top' src={require("../../images/blog/aus.jpg")}/>
            <Card.Body className={blogStyles.cardBodyStyle}>
              <Link to="/blog/australia" className={blogStyles.linkText}><Button
                variant="dark">Australia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}


export default Index
