import React from 'react'
import { Link } from 'react-router-dom'

const Primero = () => {
  return (
    <body className="bodyIndex">
      <header className="headerIndex">
        <input type="checkbox" id="btn-menu"></input>
        <label for="btn-menu"><img src="icono-menu.jpg" alt=""></img>
          </label> 
        <nav className="menu">
          <ul>
            
            <li><Link to="/Productos1">Productos</Link></li>
            <li classname="fas fa-store"><Link to="/Usuarios">Usuarios</Link></li>
            <li><Link to="/Clientes">Clientes</Link></li>
            <li><Link to="/Ventas">Ventas</Link></li>
            <li><Link to="/InfoVentas">Informacion de ventas</Link></li>

          </ul>
        </nav>



      </header>

    </body>  
     
    
  )}

export default Primero;
