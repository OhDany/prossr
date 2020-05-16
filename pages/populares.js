  
import React from 'react';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import DetallesProducto from '../components/layout/DetallesProducto';
import useProductos from '../hooks/useProductos';


const Populares = () => {

  const { productos } = useProductos('votos');

	return (
		<div className="container">
			<Layout>
				<div className="listado-productos">
					<div className="contenedor">
						<ul className="bg-white">
							{productos.map(producto => (
								<DetallesProducto 
									key={producto.id}
									producto={producto}
								/>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Populares;