import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div
      className='sm:hidden'
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i className={`mx-2 fas fa-${mostrarNavegacion ? 'times' : 'bars'} hover:text-black`} />
      {mostrarNavegacion && (
        <ul className='bg-blue-400'>
          <ResponsiveRoute nombre='Productos' ruta='/admin/InterfazProductos' />
        </ul>
      )}
      <i className={`fas fa-money-check-alt-${mostrarNavegacion ? 'times' : 'bars'} hover:text-black`} />
      {mostrarNavegacion && (
        <ul className='bg-blue-400'>
          <ResponsiveRoute nombre='Ventas' ruta='/admin/InterfazVentas' />
        </ul>
      )}
      <i className={`fas fa-user-tag-${mostrarNavegacion ? 'times' : 'bars'} hover:text-black`} />
      {mostrarNavegacion && (
        <ul className='bg-blue-400'>
          <ResponsiveRoute nombre='Clientes' ruta='/admin/Clientes' />
        </ul>
      )}
      <i className={`fas fa-id-card-${mostrarNavegacion ? 'times' : 'bars'} hover:text-black`} />
      {mostrarNavegacion && (
        <ul className='bg-blue-400'>
          <ResponsiveRoute nombre='Usuarios' ruta='/admin/Usuarios' />
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <li className='text-gray-200 border border-gray-300 p-1'>{nombre}</li>
    </Link>
  );
};

export default SidebarResponsive;
