import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import avatar from "../images/avatar.png"
import avatarExcited from "../images/avatar-excited.png"
import styles from "../styles/index.module.css"

class IndexPage extends React.Component{
  componentDidMount(){
    console.log("mounted");
    console.log(styles.avatar)
    let avatarEl = document.querySelector(`.${styles.avatar}`)
    avatarEl.addEventListener("mouseover", () => {avatarEl.src = avatarExcited})
    avatarEl.addEventListener("mouseleave", () => {avatarEl.src = avatar})
  }

  render(){
    return(
      <Layout>
        <div class="index-above-fold">
          <h1>Kerwin Tichmann</h1>
          <h2>Web Developer</h2>
          <img alt="avatar" className={styles.avatar} src={avatar}/>
          <p>I'm a front-end web developer based in Cape Town. Take a look at my <Link to="/portfolio">portfolio</Link> or <Link to="/contact">get&nbsp;in&nbsp;touch</Link></p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
