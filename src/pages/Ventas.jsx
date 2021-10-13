import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import Primero from '../pages/Primero'
import 'react-toastify/dist/ReactToastify.css';

const VentasBackend=[
  {
  a: '179654',
  b: '01/08/2021',

  },

  {
  a: '135874',
  b: '15/08/2021',

  },

  {
  a: '154698',
  b: '10/09/2021',

},
{
  a: '35465',
  b: '31/10/2021',

},

];

const Ventas = () => {
  const[mostrarTabla,setMostrarTabla]=useState(true);
  const [textoBoton,setTextoBoton]=useState("Agregar nueva venta");
  const[ventas,setVentas]=useState([]);
  const[colorBoton,setColorBoton]=useState();

  useEffect(()=>{
      setVentas(VentasBackend);
  },[]);

  useEffect(()=>{
      if (mostrarTabla){
          setTextoBoton("Agregar nueva venta")
          setColorBoton("color1")
      }
      else{
          setTextoBoton("Mostrar todas las ventas")
          setColorBoton("color2")
      }

  },[mostrarTabla])


  return (
      <div>
          <Primero/>
          <h2>Pagina de administración de Ventas</h2>
          <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={colorBoton} >{textoBoton}</button>
          {mostrarTabla?
          <TablaVentas listaVentas={ventas}/>:
          <FormularioCreacionVentas  MostrarTabla={setMostrarTabla} listaVentas={ventas} AgregarVenta={setVentas}/>
          }
          <ToastContainer position="top-center"autoClose={5000} closeOnClick/>
      </div>

  )
}

export default Ventas;

const TablaVentas=({listaVentas})=>{
  const[busqueda,setBusqueda]=useState('')
  const[filtrarVentas,setFiltrarVentas]=useState(listaVentas)

  useEffect(()=>{
      setFiltrarVentas(
          listaVentas.filter((elemento)=>{
          return elemento.a.toLowerCase().includes(busqueda.toLowerCase());
      })
      );

  },[busqueda])
  return(
    <div>
      <input className="filtro" placeholder="Buscar por ID" value={busqueda} onChange={e=>setBusqueda(e.target.value)}>
      </input>
      <table className="tabla_ventas">
          <thead>
              <tr>
                  <th >ID</th>
                  <th >FECHA</th>
              </tr>
          </thead>
          <tbody>
              {filtrarVentas.map((ventas)=>{
                  return (
                      <tr>
                          <td >{ventas.a}</td>
                          <td >{ventas.b}</td>
                      </tr>
                  );
              })}
          </tbody>
      </table>
    </div>
  )
}

const FormularioCreacionVentas=({MostrarTabla,listaVentas,AgregarVenta})=>{

  const[id,setId]=useState("");
  const[fecha,setFecha]=useState("");
  const envirAlBakend=()=>{

      if(id==="" || fecha===""){
          toast.error("VENTA NO REGISTRADA - RELLENE TODOS LOS CAMPOS");
      }
      else{
      toast.success("Venta Registrada con éxito");
      MostrarTabla(true);
      AgregarVenta([...listaVentas,{a:id,b:fecha},]);
      }
  };

  return(
      <form className="form-register">
          <label htmlFor='ID'> ID de la venta
              <input className="controls" type="number" name="ID" placeholder="ID de la venta" value={id} onChange={(e)=>{setId(e.target.value)}} required/>
          </label>
          <label htmlFor='Fecha'> Fecha creacion de la venta
              <input className="controls" type="date" name="Fecha"  placeholder="Fecha de la venta" value={fecha} onChange={(e)=>{setFecha(e.target.value)}} required/>
          </label>
          <button class="boton" onClick={()=>{envirAlBakend()}} type="button"> Registrar Venta</button>
      </form>
  )
}
