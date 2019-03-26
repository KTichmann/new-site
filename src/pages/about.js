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
				I’m a self-taught web developer based in Cape Town. Currently working as
				a junior web developer at an international agency.
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
			</p>
		</div>
	</Layout>
);

export default AboutPage;
