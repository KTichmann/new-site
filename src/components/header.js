import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import styles from "../styles/header.module.css";

const Header = () => (
	<header>
		<Link to='/'>
			<div className={styles.logo}>&#123; ...Kerwin &#125;</div>
		</Link>
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/projects'>Projects</Link>
			<Link className={styles.rmOnSmallest} to='/contact'>
				Contact
			</Link>
			<a
				className={styles.rmOnMobile}
				href='https://github.com/ktichmann'
				target='_blank'>
				Github
			</a>
			<a
				className={styles.rmOnMobile}
				href='https://codepen.io/ktichmann'
				target='_blank'>
				CodePen
			</a>
		</nav>
	</header>
);

export default Header;
