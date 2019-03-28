import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import headStyle from "../styles/pageHead.module.css";
import aboutHeader from "../images/aboutHeader.jpg";

const AboutPage = () => (
	<Layout>
		<div style={{ overflow: "hidden" }} className={headStyle.headAboveFold}>
			<div class={headStyle.overlay} />
			<img
				style={{ height: "auto", marginTop: "-300px" }}
				className={headStyle.headerImg}
				src={aboutHeader}
				alt='computer with code'
			/>
			<div className={headStyle.headText}>
				<h1>pro'•gram•mer (n.)</h1>
				<h3 style={{ textAlign: "right" }}>
					An organism that converts caffeine into code.
				</h3>
			</div>
		</div>
		<div class='about-text'>
			<p>
				I’m a frontend web developer building websites, apps, and plugins in
				Cape Town.
			</p>
			<p>
				As a self-taught developer, I'm always looking to improve my knowledge
				and skills through taking online courses and building projects with new
				technology.
				<br />
				At work, I'm involved in a number of projects, including updating the
				company website, adding pages and functionality where needed. I also
				help to manage and maintain our WordPress multisite platform, building
				custom plugins, and fixing any bugs.
				<br />
				My interest in programming began when I came across CS50x,{" "}
				<a href='https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x'>
					Harvard’s Introduction to Computer Science on edX
				</a>
				. This course gave me an intriguing overview of computer science and,
				after completing it, I moved on to other courses, learning as much as I
				could about programming in my free time.
			</p>
			<p>
				Since then, I've worked on
				<Link to='/projects'>a number of projects</Link>, using a variety of
				technologies, including React, Redux, Bootstrap, SCSS, Heroku,
				PostgreSQL, Node, Express, and more. I'm constantly looking for a fresh,
				new challenge to work on.
			</p>
		</div>
	</Layout>
);

export default AboutPage;
