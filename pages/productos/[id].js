import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// import Layout from '../../components/layout';
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/404';
import Layout from '../../components/layout/Layout';

const Producto = (props) => {

  // state del componente
  const [ producto, guardarProducto ] = useState({});
  const [ error, guardarError ] = useState(false);

  // Routing para obtener el ID actual
  const router = useRouter();
  const { query: { id }} = router;

  // Context firebase
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection('productos').doc(id);
        const producto = await productoQuery.get();
        if (producto.exists) {
          guardarProducto(producto.data());
        } else {
          guardarError(true);
        }
        
      }
      obtenerProducto();
    }
  }, [id])

  return (
    <Layout>
      <>
      { error && <Error404 /> }
      </>
    </Layout>
  );
}
 
export default Producto;