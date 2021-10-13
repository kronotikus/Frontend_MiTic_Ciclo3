import React,{useState} from 'react';
import Primero from 'pages/Primero';
import Productos1 from 'pages/Productos1';
import Usuarios from 'pages/Usuarios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Clientes from 'pages/Clientes';
import InfoVentas from 'pages/InfoVentas';
import Ventas from 'pages/Ventas';

function App() {

  return (
    <div className='App'>
   
      <Router>
          <Switch>
            
            <Route path='/Usuarios' exact>
              <Usuarios/>
            </Route> 
           
            <Route path='/Productos1' exact>
              <Productos1/>
            </Route> 
            <Route path='/Clientes' exact>
              <Clientes/>
            </Route> 
            <Route path='/Ventas' exact>
              <Ventas/>
            </Route> 
            <Route path='/InfoVentas' exact>
              <InfoVentas/>
            </Route> 


            <Route path='/' exact>
              <Primero />
            </Route>

          </Switch>
      </Router>
 
    </div>
  );
}

export default App;
