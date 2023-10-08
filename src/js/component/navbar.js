import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
			</div>
		</nav>
	);
};
