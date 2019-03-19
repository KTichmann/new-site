import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import headStyle from "../styles/pageHead.module.css"

import avatar from "../images/avatar.png"
import codepad from "../images/codepad.jpg"
import movie from "../images/movie.png"
import ssl from "../images/ssl.jpg"
import forum from "../images/jobFinder.jpg"
import avatarExcited from "../images/avatar-excited.png"
import styles from "../styles/index.module.css"

class IndexPage extends React.Component {
  componentDidMount(){
    let avatarEl = document.querySelector(`.${styles.avatar}`)
    avatarEl.addEventListener("mouseover", () => {avatarEl.src = avatarExcited})
    avatarEl.addEventListener("mouseleave", () => {avatarEl.src = avatar})
  }

  render(){
    return(
      <Layout>
        <div className={headStyle.headAboveFold} id={styles.indexAboveFold}>
          <div style={{
            marginTop: "14%",
          }}>
            <h1 style={{textAlign: "left"}}>Hi, I'm Kerwin</h1>
            <h3 style={{textAlign: "left"}}>I'm a front-end web developer based in Cape Town. <br />Take a look at my <Link to="/projects">projects</Link> or <Link to="/contact">get&nbsp;in&nbsp;touch</Link></h3>
          </div>
          <img alt="avatar" className={styles.avatar} src={avatar}/>
        </div>
        <div className={styles.project} id={styles.codepad}>
          <div className={styles.projectOverlay}> 
          <p>CodePad - A code note-taking extension for chrome with syntax highlighting, prettify & emmet support </p>
          </div>
          <img alt="codepad" src={codepad} />
        </div>
        <div className={styles.project} id={styles.codepad}>
          <div className={styles.projectOverlay}> 
          <p>CodePad - A code note-taking extension for chrome with syntax highlighting, prettify & emmet support </p>
          </div>
          <img alt="movie-summarizer" src={movie} />
        </div>
        <div className={styles.project} id={styles.codepad}>
          <div className={styles.projectOverlay}> 
          <p>CodePad - A code note-taking extension for chrome with syntax highlighting, prettify & emmet support </p>
          </div>
          <img style={{width: "100%"}} alt="lets-helper" src={ssl} />
        </div>
        <div className={styles.project} id={styles.codepad}>
          <div className={styles.projectOverlay}> 
          <p>For'm - A decoupled forum app with an api run on Node & Postgres, and a frontend built in React/Gatsby</p>
          </div>
          <img alt="for'm" src={forum} />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
