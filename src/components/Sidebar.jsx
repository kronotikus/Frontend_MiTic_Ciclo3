import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='font-mono md:font-mono hidden sm:flex sm:w-72 border border-blue-100 h-full flex-col bg-white-200 p-4 sidebar'>
      <Link to='/admin'>
      </Link>

      <div className='my-4'>
        <Ruta icono='fas fa-boxes' ruta='/admin/InterfazProductos' nombre='Productos' />
      </div>
      <div className='my-4'>
        <Ruta icono='fas fa-money-check-alt' ruta='/admin/InterfazVentas' nombre='Ventas' />
      </div>
      <div className='my-4'>
        <Ruta icono='fas fa-boxes' ruta='/admin/InterfazInfoVentas' nombre='Info Ventas' />
      </div>
      <div className='my-4'>
        <Ruta icono='fas fa-user-tag' ruta='/admin/Clientes' nombre='Clientes' />
      </div>
      <div className='my-4'>
        <Ruta icono='fas fa-id-card' ruta='/admin/Usuarios' nombre='Usuarios' />
      </div>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <button className='p-2 my-1 bg-transparent-500 hover:bg-blue-400 flex w-full items-center text-black rounded-l-3xl'>
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;
