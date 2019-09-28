import React from "react";
import "./styles.css";

const AboutLink = ({ className = "" }) => (
	<a href="/" className={`about-link ${className}`}>
		Sobre
	</a>
);

export default AboutLink;
