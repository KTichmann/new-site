import React from "react";
import Layout from "../components/layout";
import headStyle from "../styles/pageHead.module.css";
import timelineHeader from "../images/timeline.jpg";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/project-timeline.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const NotFoundPage = () => (
	<Layout>
		<div className={headStyle.headAboveFold}>
			<div className={headStyle.overlay} />
			<img
				className={headStyle.headerImg}
				src={timelineHeader}
				alt='computer with code'
			/>
			<div className={headStyle.headText} style={{ left: "10%" }}>
				<h1 style={{ fontSize: "3rem" }}>
					Quote about growth/time
					<br /> or something
				</h1>
				<h3 style={{ textAlign: "right" }}>-Linus Torvalds</h3>
			</div>
		</div>
		<div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='June 2019 - Now'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Code Snippet Forum
					</h2>
					<p>
						A code snippet sharing/collaboration forum built using Node,
						GraphQl, Typeorm, Postgres and React.
						<br />A work in Progress...
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='May 2019'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>Image Differ</h2>
					<p>
						An image comparison app that supports uploading images for
						comparison.
						<br />
						<a href='https://github.com/KTichmann/Lets-Helper'>Github Code</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='May 2019'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Ticketing Dashboard
					</h2>
					<p>
						A simple kanban ticket board with drag and drop functionality.
						<br />
						<a href='https://github.com/KTichmann/ticketing-frontend'>
							Github Code
						</a>
						<br />
						<a href='https://ktichmann.github.io/ticketing-dashboard/'>Demo</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='May 2019'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>This Site!</h2>
					<p>Built with Gatsby :D</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='March 2019'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>Forum</h2>
					<p>
						A decoupled forum app with an api run on Node & Postgres, and a
						frontend built in React/Gatsby
						<br />
						<a href='https://github.com/KTichmann/forum-frontend'>
							Github Code
						</a>
						<br />
						<a href='https://ktichmann.github.io/forum-frontend/'>Demo</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='Feb 2019'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Let's Encrypt Helper
					</h2>
					<p>
						A wordpress plugin that allows website owners to manage their ssl
						certificate through the wordpress frontend.
						<br />
						<a href='https://github.com/KTichmann/Lets-Helper'>Github Code</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='Nov 2018'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						CodePad Chrome Extension
					</h2>
					<p>
						A note-taking chrome extension designed for taking quick front-end
						code notes.
						<br />
						<a href='https://github.com/KTichmann/CodePad'>Github Code</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='Sept 2018'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
					icon={<WorkIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Started working as a Web Developer
					</h2>
					<h4 className='vertical-timeline-element-subtitle'>bOnline Ltd.</h4>
					<p>Started a position as a web developer at bOnline.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='July 2018'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>Survey</h2>
					<p>
						A survey program built for a friend to help assess user engagement
						with their website's menu.
						<br />
						<a href='https://github.com/KTichmann/survey'>Github Code</a>
						<br />
						<a href='https://ktichmann.github.io/survey/#/'>Demo</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='July 2018'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>Movie Summarizer</h2>
					<p>
						A movie summarizing app that allows users to search for a movie to
						be summarized, then presents a 3-line summary of the film.
						<br />
						<a href='https://github.com/KTichmann/MovieSummarizer'>
							Github Code
						</a>
						<br />
						<a href='https://ktichmann.github.io/MovieSummarizer/#/'>Demo</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='June 2018'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Budget Single Page App
					</h2>
					<p>
						My first personal project using react - a budgeting app that allows
						users to add, remove, update, filter and sort inputs.
						<br />
						<a href='https://github.com/KTichmann/budgetApp'>Github Code</a>
						<br />
						<a href='https://ktichmann.github.io/budgetApp/'>Demo</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='June 2018'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Fitness Site from psd
					</h2>
					<p>
						One of the first pages I built from a psd using html, css etc.
						<br />
						<a href='https://github.com/KTichmann/fitnessSite/'>Github Code</a>
						<br />
						<a href='https://github.com/KTichmann/fitnessSite/'>Demo</a>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='May 2018'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<SchoolIcon />}>
					<h2 className='vertical-timeline-element-title'>
						Font Finder Chrome Extension
					</h2>
					<p>
						A chrome extension that allows the user to see which font/styles a
						site is using.
						<br />
						<a href='https://github.com/KTichmann/fitnessSite/'>Github Code</a>
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	</Layout>
);

export default NotFoundPage;
