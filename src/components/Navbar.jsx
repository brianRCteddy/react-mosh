import React, { Component } from 'react';

const Navbar = (props) => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar{' '}
					<span badge badge-pill badge-secondary>
						{props.totalCounters}
					</span>
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
