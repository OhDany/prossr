import Head from 'next/head';

export default function Home() {
	return (
		<div className="container">
			<h1>Inicio</h1>
			<style jsx>{`
				h1 {
					color: red;
				}
			`}</style>
		</div>
	);
}
