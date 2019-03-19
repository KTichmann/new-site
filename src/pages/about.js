import React from "react";
import Layout from "../components/layout"
import headStyle from "../styles/pageHead.module.css"
import aboutHeader from "../images/aboutHeader.jpg"

const AboutPage = () => (
    <Layout>
        <div style={{ overflow: "hidden" }} className={headStyle.headAboveFold}>
            <div class={headStyle.overlay}></div>
            <img style={{ height: "auto", marginTop: "-300px"}} className = {headStyle.headerImg} src={aboutHeader} alt="computer with code"/>
            <div className={headStyle.headText}>
                <h1>pro'•gram•mer (n.)</h1>
                <h3 style={{textAlign: "right"}}>An organism that converts caffeine into code.</h3>
            </div>
        </div>
    </Layout>
)

 export default AboutPage;