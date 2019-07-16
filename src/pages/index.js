import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import headStyle from "../styles/pageHead.module.css";

import avatar from "../images/avatar.png";
import codepad from "../images/codepad.jpg";
import imgDiff from "../images/imgDiff.png";
import ticketing from "../images/ticketing.png";
import ssl from "../images/ssl.jpg";
import forum from "../images/jobFinder.jpg";
import avatarExcited from "../images/avatar-excited.png";
import styles from "../styles/index.module.css";

class IndexPage extends React.Component {
	componentDidMount() {
		let avatarEl = document.querySelector(`.${styles.avatar}`);
		avatarEl.addEventListener("mouseover", () => {
			avatarEl.src = avatarExcited;
		});
		avatarEl.addEventListener("mouseleave", () => {
			avatarEl.src = avatar;
		});
	}

	render() {
		return (
			<Layout>
				<div className={headStyle.headAboveFold} id={styles.indexAboveFold}>
					<div
						style={{
							marginTop: "14%",
							paddingLeft: "1rem"
						}}>
						<h1 style={{ textAlign: "left" }}>Hi, I'm Kerwin</h1>
						<h3 style={{ textAlign: "left" }}>
							I'm a front-end web developer based in Cape Town. <br />
							Take a look at my <Link to='/projects'>projects</Link>,
							<Link to='/project-timeline'> project timeline</Link> or
							<Link to='/contact'> get&nbsp;in&nbsp;touch</Link>
						</h3>
					</div>
					<img alt='avatar' className={styles.avatar} src={avatar} />
				</div>
				<div className={styles.project}>
					<Link to='/projects#forumApi'>
						<div className={styles.projectOverlay}>
							<p>
								For'm - A decoupled forum app with an api run on Node &
								Postgres, and a frontend built in React/Gatsby
							</p>
						</div>
						<img alt="for'm" src={forum} />
					</Link>
				</div>
				<div className={styles.project}>
					<Link to='/projects#ticketing'>
						<div className={styles.projectOverlay}>
							<p>
								Ticketing - A Kanban style ticket board with support for
								multiple users & boards/tickets.
							</p>
						</div>
						<img alt='ticketing' src={ticketing} />
					</Link>
				</div>
				<div className={styles.project}>
					<Link to='/projects#letshelper'>
						<div className={styles.projectOverlay}>
							<p>
								Let's Helper - A WordPress Plugin that allows users to create,
								update, list, and revoke SSL certificates.
							</p>
						</div>
						<img style={{ width: "100%" }} alt='lets-helper' src={ssl} />
					</Link>
				</div>
				<div className={styles.project}>
					<Link to='/projects#codePad'>
						<div className={styles.projectOverlay}>
							<p>
								CodePad - A code note-taking extension for chrome with syntax
								highlighting, prettify & emmet support
							</p>
						</div>
						<img alt='codepad' src={codepad} />
					</Link>
				</div>
				<div className={styles.project}>
					<Link to='/projects#imgDiff'>
						<div className={styles.projectOverlay}>
							<p>
								Img-Diff - an image comparison SPA that supports uploading
								images to compare differences, as well as capturing images from
								urls.
							</p>
						</div>
						<img alt='image differ project' src={imgDiff} />
					</Link>
				</div>
			</Layout>
		);
	}
}

export default IndexPage;
