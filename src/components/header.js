import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import styles from "../styles/header.module.css"

import logo from "../images/logo.png"

const Header = () => (
  <header>
    <Link to="/"><img alt="" src={logo} /></Link>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <a href="https://github.com/ktichmann" target="_blank">Github</a>
      <a href="https://codepen.io/ktichmann" target="_blank">CodePen</a>
    </nav>

  </header>
)

export default Header
