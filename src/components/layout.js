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
      <div id="layoutContainer">
        <Header />
        <main id="main">
          <Container fluid>{children}</Container>
        </main>
        <footer id="footer">
          <p style={{ fontWeight: "bold" }}>
            Sunshine Cray © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
