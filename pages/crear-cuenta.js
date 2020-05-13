import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit } from '../components/ui/Formulario';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const CrearCuenta = () => {

  const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
  }

  const {valores, errores, submitForm, handleSubmit, handleChange} = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  function crearCuenta() {
    console.log('Creando cuenta');
  }

  return (
    <div>
      <Layout>
        <>
        <h1
          css = {css`
            text-align: center;
            margin-top: 5rem;
          `}
        >Crear Cuenta</h1>
        <Formulario>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
            />
          </Campo>
  
          <Campo>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
            />
          </Campo>
  
          <Campo>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
            />
          </Campo>
  
          <InputSubmit type="submit"
            value="Crear Cuenta"
          />
        </Formulario>
        </>
      </Layout>
    </div>
  )
}

export default CrearCuenta;