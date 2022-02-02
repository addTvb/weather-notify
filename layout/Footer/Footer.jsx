import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/addTvb"
				target="_blank"
				rel="noopener noreferrer"
			>
				Created by&nbsp;
				<span className={styles.logo}>{" <addTvb/>"}</span>
			</a>
		</footer>
	);
};
