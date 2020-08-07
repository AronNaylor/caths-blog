import React from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"
import headerStyles from "./header.module.css"

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Sunshine cRay</Navbar.Brand>
      <div className={headerStyles.navContainer}>
        <Link
          to="/"
          className={headerStyles.link}
          activeClassName={headerStyles.activeLink}
        >
          <a>Home</a>
        </Link>
        <Link
          to="/blog"
          className={headerStyles.link}
          activeClassName={headerStyles.activeLink}
        >
          Blog
        </Link>
        <Link
          to="/gallery"
          className={headerStyles.link}
          activeClassName={headerStyles.activeLink}
        >
          Gallery
        </Link>
      </div>
    </Navbar>
  )
}

export default Header
