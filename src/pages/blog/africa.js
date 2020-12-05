import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Row, Col, Card, Badge } from "react-bootstrap"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

function Africa() {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(filter: { tag: { eq: "Africa" } }) {
        edges {
          node {
            title
            slug
            tag
            country
            publishedDate(formatString: "MMMM DD YYYY")
            shortDesc
          }
        }
      }
    }
  `)

  console.log(blogData)

  return (
    <Layout>
      <SEO title="Africa" />
      <Row>
        <Col className={countryStyles.titleContainer}>
          <h1 className={countryStyles.title}>Africa</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          {blogData.allContentfulBlogPost.edges.map(blog => {
            return (
              <div className={countryStyles.cardContainer}>
                <Card className={countryStyles.card}>
                  <Row>
                    <Col>
                      <Link to={`/blog/${blog.node.slug}`}>
                        <h2 className={countryStyles.cardTitle}>
                          {blog.node.title}
                        </h2>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className={countryStyles.badgeContainer}>
                        <Badge variant="dark" className={countryStyles.badge}>
                          {blog.node.publishedDate}
                        </Badge>
                        <Badge variant="dark" className={countryStyles.badge}>
                          {blog.node.tag}
                        </Badge>
                        <Badge variant="dark" className={countryStyles.badge}>
                          {blog.node.country}
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className={countryStyles.descContainer}>
                      <p className={countryStyles.desc}>
                        {blog.node.shortDesc}
                      </p>
                    </Col>
                  </Row>
                </Card>
              </div>
            )
          })}
        </Col>
      </Row>
    </Layout>
  )
}

export default Africa
