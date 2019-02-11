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
          <div style={{
            marginTop: "8%",
            marginLeft: "1rem",
          }}>
            <h1 style={{textAlign: "left"}}>Kerwin</h1>
            <h3 style={{textAlign: "left"}}>I'm a front-end web developer based in Cape Town. <br />Take a look at my <Link to="/portfolio">portfolio</Link> or <Link to="/contact">get&nbsp;in&nbsp;touch</Link></h3>
          </div>
          <img alt="avatar" className={styles.avatar} src={avatar}/>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
