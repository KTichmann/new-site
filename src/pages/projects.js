import React from "react";
import {Link} from "gatsby"
import Layout from "../components/layout"
import headStyle from "../styles/pageHead.module.css"
import styles from "../styles/projects.module.css"
import projectHeader from "../images/projectHeader.jpg"

import codepad from "../images/codepad.jpg"
import movie from "../images/movie.png"
import ssl from "../images/ssl.jpg"
import forum from "../images/jobFinder.jpg"

const PortfolioPage = () => (
    <Layout>
        <div className={headStyle.headAboveFold}>
            <div className={headStyle.overlay}></div>
            <img className = {headStyle.headerImg} src={projectHeader} alt="computer with code"/>
            <div className={headStyle.headText}>
                <h1>Talk is Cheap, <br /> Show Me the Code</h1>
                <h3 style={{textAlign: "right"}}>-Linus Torvalds</h3>
            </div>
        </div>
        <div id={styles.projectSection}>
            <div className={styles.project}>
                <img alt="forum" src={forum} />
                <div className={styles.projectSectionWording}>
                    <span className={styles.projectSectionHeader}>The Most Responsive, Friendly Service You've Likely Ever Had.</span>
                    <span className={styles.separator}></span>
                    <span className={styles.projectSectionText}>
                        Clients hire us based on our merit – they love us for our accessibility. We go to great lengths to be incredibly responsive to your needs so you never feel ignored and always feel taken care of
                    </span>
                </div>
            </div>
            <div className={styles.project}>
                <div className={styles.projectSectionWording}>
                    <span className={styles.projectSectionHeader}>The Most Responsive, Friendly Service You've Likely Ever Had.</span>
                    <span className={styles.separator}></span>
                    <span className={styles.projectSectionText}>
                        Clients hire us based on our merit – they love us for our accessibility. We go to great lengths to be incredibly responsive to your needs so you never feel ignored and always feel taken care of
                    </span>
                </div>
                <img alt="ssl" src={ssl} />
            </div>
            <div className={styles.project}>
                <img alt="codepad" src={codepad} />
                <div className={styles.projectSectionWording}>
                    <span className={styles.projectSectionHeader}>The Most Responsive, Friendly Service You've Likely Ever Had.</span>
                    <span className={styles.separator}></span>
                    <span className={styles.projectSectionText}>
                        Clients hire us based on our merit – they love us for our accessibility. We go to great lengths to be incredibly responsive to your needs so you never feel ignored and always feel taken care of
                    </span>
                </div>
            </div>
            <div className={styles.project}>
                <div className={styles.projectSectionWording}>
                    <span className={styles.projectSectionHeader}>Movie Summarizer</span>
                    <span className={styles.separator}></span>
                    <span className={styles.projectSectionText}>
                        A movie summarizing web-based app that allows users to search for and select a movie to be summarized, then presents a 3-line summary of the film. The app was built in two parts, the backend “API”, hosted on Heroku, and the “static” front-end on Github Pages.
                        <a target="_blank" style={{display: "block"}} href="https://github.com/ktichmann">See the Demo</a>
                        <a target="_blank" style={{display: "block"}} href="https://github.com/ktichmann">View on Github</a>
                    </span>
                </div>
                <img alt="movie" src={movie} />
            </div>
        </div>
    </Layout>
)

export default PortfolioPage;