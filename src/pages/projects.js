import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import headStyle from "../styles/pageHead.module.css";
import styles from "../styles/projects.module.css";
import projectHeader from "../images/projectHeader.jpg";

import codepad from "../images/codepad.jpg";
import movie from "../images/movie.png";
import ssl from "../images/ssl.jpg";
import forum from "../images/forum-img.png";
import api from "../images/forumApi.jpg";
import node from "../images/nodejs.png";
import postgres from "../images/postgres.png";
import heroku from "../images/heroku.png";
import wordpress from "../images/wordpress.png";
import php from "../images/php.png";
import certbot from "../images/certbot.png";
import mysql from "../images/mysql.png";
import react from "../images/react.png";
import socket from "../images/socket.png";
import gatsby from "../images/gatsby.png";
import scss from "../images/scss.png";
import reactRouter from "../images/react-router.png";

const PortfolioPage = () => (
  <Layout>
    <div className={headStyle.headAboveFold}>
      <div className={headStyle.overlay} />
      <img
        className={headStyle.headerImg}
        src={projectHeader}
        alt="computer with code"
      />
      <div className={headStyle.headText}>
        <h1>
          Talk is Cheap, <br /> Show Me the Code
        </h1>
        <h3 style={{ textAlign: "right" }}>-Linus Torvalds</h3>
      </div>
    </div>
    <div id={styles.projectSection}>
      <div className={styles.project}>
        <div className={styles.imgWrapper}>
          <img alt="forum-api" src={api} />
          <div className={styles.imgOverlay}>
            <div className={styles.builtWith}>
              <ul style={{ textAlign: "center" }}>
                <li>Built With: </li>
                <li>
                  <img alt="node" src={node} />
                  Node
                </li>
                <li>
                  <img alt="postgres" src={postgres} />
                  PostgreSQL
                </li>
                <li>
                  <img alt="heroku" src={heroku} />
                  Heroku
                </li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.projectSectionWording}>
          <span className={styles.projectSectionHeader}>Forum API</span>
          <span className={styles.separator} />
          <span className={styles.projectSectionText}>
            A headless forum api built using Express, Node, and saving data to a
            PostGreSQL database. The api comes with routes for creating,
            reading, updating, and deleting posts, likes, and comments. There's
            also user authentication through JWT headers.
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://github.com/https://github.com/KTichmann/forum-api"
            >
              View on Github
            </a>
          </span>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectSectionWording}>
          <span className={styles.projectSectionHeader}>Forum Frontend</span>
          <span className={styles.separator} />
          <span className={styles.projectSectionText}>
            A frontend that consumes my Forum API, displaying a forum 'static'
            site built in Gatsby. Users can sign up, log in, create posts,
            comments, and leave likes. There's also a chat-box app built-in
            that's built using websockets on a separate server.
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://ktichmann.github.io/forum-frontend"
            >
              See the Demo
            </a>
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://github.com/KTichmann/forum-frontend"
            >
              View on Github
            </a>
          </span>
        </div>
        <div className={styles.imgWrapper}>
          <img alt="forum" src={forum} />
          <div className={styles.imgOverlay}>
            <div className={styles.builtWith}>
              <ul style={{ textAlign: "center" }}>
                <li>Built With: </li>
                <li>
                  <img alt="node" src={gatsby} />
                  Gatsby
                </li>
                <li>
                  <img alt="node" src={react} />
                  React
                </li>
                <li>
                  <img alt="node" src={socket} />
                  Socket.io
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imgWrapper}>
          <img alt="ssl" src={ssl} />
          <div className={styles.imgOverlay}>
            <div className={styles.builtWith}>
              <ul style={{ textAlign: "center" }}>
                <li>Built With: </li>
                <li>
                  <img alt="wordpress" src={wordpress} />
                  WordPress
                </li>
                <li>
                  <img alt="php" src={php} />
                  PHP
                </li>
                <li>
                  <img alt="mysql" src={mysql} />
                  MySQL
                </li>
                <li>
                  <img alt="certbot" src={certbot} />
                  Certbot-auto
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.projectSectionWording}>
          <span className={styles.projectSectionHeader}>
            LetsEncrypt Helper Plugin for WordPress
          </span>
          <span className={styles.separator} />
          <span className={styles.projectSectionText}>
            A wordpress plugin that allows website owners to manage their ssl
            certificate through the wordpress frontend. Built for multisite
            installations, the plugin runs certbot-auto on the backend to
            create, update, revoke, or list certificates on the network.
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://github.com/KTichmann/Lets-Helper"
            >
              View on Github
            </a>
          </span>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectSectionWording}>
          <span className={styles.projectSectionHeader}>
            CodePad - Chrome Extension
          </span>
          <span className={styles.separator} />
          <span className={styles.projectSectionText}>
            A note-taking chrome extension designed for taking quick front-end
            code notes. Supports syntax highlighting for JavaScript, CSS, HTML,
            CoffeeScript, and JSX, as well as code formatting with prettier, and
            EMMET for HTML shortcuts.
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://github.com/KTichmann/CodePad"
            >
              View on Github
            </a>
          </span>
        </div>
        <div className={styles.imgWrapper}>
          <img alt="codepad" src={codepad} />
          <div className={styles.imgOverlay}>
            <div className={styles.builtWith}>
              <ul style={{ textAlign: "center" }}>
                <li>Built With: </li>
                <li>
                  <img src={react} />
                  React
                </li>
                <li>
                  <img src={scss} />
                  Scss
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.imgWrapper}>
          <img alt="movie" src={movie} />
          <div className={styles.imgOverlay}>
            <div className={styles.builtWith}>
              <ul style={{ textAlign: "center" }}>
                <li>Built With: </li>
                <li>
                  <img src={node} />
                  Node
                </li>
                <li>
                  <img src={react} />
                  React
                </li>
                <li>
                  <img src={reactRouter} />
                  React Router
                </li>
                <li>
                  <img src={scss} />
                  Scss
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className={styles.projectSectionWording}>
          <span className={styles.projectSectionHeader}>Movie Summarizer</span>
          <span className={styles.separator} />
          <span className={styles.projectSectionText}>
            A movie summarizing web-based app that allows users to search for
            and select a movie to be summarized, then presents a 3-line summary
            of the film. The app was built in two parts, the backend “API”,
            hosted on Heroku, and the “static” front-end on Github Pages.
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://ktichmann.github.io/MovieSummarizer/#/"
            >
              See the Demo
            </a>
            <a
              target="_blank"
              style={{ display: "block" }}
              href="https://github.com/KTichmann/MovieSummarizer"
            >
              View on Github
            </a>
          </span>
        </div>
      </div>
    </div>
  </Layout>
);

export default PortfolioPage;
