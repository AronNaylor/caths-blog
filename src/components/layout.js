import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <>
      <div>
        <Header/>
        <Container fluid>
          {children}
        </Container>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
