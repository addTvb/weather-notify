import React from "react";

import styles from "./Placeholder.module.css";

export const Placeholder = ({
	width = "100%",
	height = "100%",
	borderRadius = "0.3rem",
}) => {
	return (
		<span
			style={{ width: width, height: height, borderRadius: borderRadius }}
			className={styles.placeholder}
		></span>
	);
};
