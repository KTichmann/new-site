import React, { useState } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import api from "../../api/blog";
import Layout from "../../components/layout";
import index from "../../styles/blog/index.module.css";
import styles from "../../styles/index.module.css";
import headStyle from "../../styles/pageHead.module.css";
import Image from "../../components/Image";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function BlogPage() {
	const [blogs, setBlogs] = useState([]);
	api.getBlogs().then(data => {
		const newData = data
			.sort((a, b) => {
				const aTime = new moment(a.created.date);
				const bTime = new moment(b.created.date);
				return bTime.isBefore(aTime) ? -1 : 1;
			})
			.map(blog => {
				const date = new moment(blog.created.date);
				return (
					<Card className={index.card} key={blog.slug}>
						<Image className={index.cardImage} alt='Gatsby in Space' filename={blog.thumbnail} />
						<div className={index.blogInfo}>
							{/* <small style={{ display: "flex", alignItems: "center" }}>
								<AccountCircleIcon style={{ marginRight: ".7rem", height: "1rem" }} />
								{blog.author}
							</small> */}
							<small style={{ display: "flex", alignItems: "center" }}>
								{date.fromNow()} <AccessAlarmsIcon style={{ marginRight: ".7rem", height: "1rem" }} />
							</small>
						</div>
						<CardContent>
							<h4 gutterBottom className={index.blogTitle}>
								{blog.title}
							</h4>
							<p className={index.blogDescription}>{blog.description}</p>
						</CardContent>
						<CardActions style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
							<Button className={index.readMoreButton} size='small' color='primary' variant='contained'>
								Read More
							</Button>
						</CardActions>
					</Card>
				);
			});
		setBlogs(newData);
	});
	return (
		<Layout>
			<div style={{ height: "30rem" }} className={headStyle.headAboveFold} id={styles.indexAboveFold}></div>
			<div className={index.content}>
				{/* { blogs } */}
				<h1>Test Text</h1>
				<div className={index.cardContainer}>{blogs}</div>
			</div>
		</Layout>
	);
}

export default BlogPage;
