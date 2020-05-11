import React from 'react';
import Link from 'next/link';
import Header from './Header';

const Layout = (props) => {
	return (
		<div>
			<Header />
			
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
