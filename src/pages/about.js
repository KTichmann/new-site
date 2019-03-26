import React from "react";
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
				I’m a self-taught dev working as a junior web developer at an agency in
				Cape Town.
			</p>
			<p>
				My interest in programming began when I came across CS50x,{" "}
				<a href='https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x'>
					Harvard’s Introduction to Computer Science on edX
				</a>
				. This course gave me an intriguing overview of computer science and,
				after completing it, I moved on to other courses, learning as much as I
				could about programming in my free time.
			</p>
			<p>
				Since then, I’ve worked on a number of personal projects and online
				courses related to both computer science and front-end web development.
				Working on personal projects - Taking online courses / MOOCS - to
				enhance my knowledge. Working on projects both at work, and in my free
				time... I've been working as a web developer at bOnline Ltd. for close
				to a year, developing a range of solutions, bug-fixes and improvements
				for our WordPress platform, as well as on our main website, and other
				projects. I've also built a few projects in my spare time, working
				mostly in ReactJs, with Node/Express as a backend. I'm constantly
				looking for a fresh, new challenge to work on.
			</p>
		</div>
	</Layout>
);

export default AboutPage;
