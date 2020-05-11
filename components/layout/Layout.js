import React from 'react';

const Layout = (props) => {
	return (
		<div>
			<h1>Header</h1>
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
