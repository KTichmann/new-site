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
        <div className={styles.indexAboveFold}>
          <div style={{marginTop: "5%"}}>
            <h1 style={{textAlign: "left"}}>Mark Testing</h1>
            <h2 style={{textAlign: "left"}}>Frontend Dev</h2>
            <p style={{textAlign: "left", width: "550px", marginTop: "0px"}}>I'm a front-end web developer based in Cape Town. Take a look at my <Link to="/portfolio">portfolio</Link> or <Link to="/contact">get&nbsp;in&nbsp;touch</Link></p>
          </div>
          <img alt="avatar" className={styles.avatar} src={avatar}/>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
