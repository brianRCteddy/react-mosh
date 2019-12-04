import React, { Component } from 'react';

const Navbar = ({ totalCounters }) => {
	console.log('Navbar is Rendered');
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar{' '}
					<span badge badge-pill badge-secondary>
						{totalCounters}
					</span>
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
