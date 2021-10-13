import { useState } from 'react';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import Primero from '../pages/Primero'

import 'react-toastify/dist/ReactToastify.css';

const clientesBackend=[
    {
    a: 'JAVIER DAVID',
    b: 'CAMPO ORTIZ',
    c: 'Cl17 No.2-33',
    d: 1061723987,
    e: '25/08/2021',
    f: 'ddj@hotmail.com',
    g: 3007042234,
    },

    {
    a: 'JUAN CAMILO',
    b: 'LOPEZ CEROM',
    c: 'Cl29 No.10-50',
    d: 1062990876,
    e: '25/09/2021',
    f: 'juan@hotmail.com',
    g: 3007052249,
    },

    {
    a: 'ANA CECILIA',
    b: 'CASAS ORTIZ',
    c: 'TRANS 1AE NO,9A54',
    d: 10435900,
    e: '30/07/2021',
    f: 'ana-098@gmail.com',
    g: 3105908172,
    },
    {
    a: 'MARIA ALEJANDRA',
    b: 'TREJO RUBIANO',
    c: 'MZ27 NO.27-06',
    d: 1061770686,
    e: '02/06/2021',
    f: 'm_2020Alejandra@gmail.com',
    g: 3137466485,
    },


];

const Clientes = () => {
    const[mostrarTabla,setMostrarTabla]=useState(true);
    const [textoBoton,setTextoBoton]=useState("Crear nuevo Cliente");
    const[cliente,setCliente]=useState([]);
    const[colorBoton,setColorBoton]=useState();
  
    useEffect(()=>{
        //obtener lista de clientes desde el backend
        setCliente(clientesBackend);
    },[]);

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton("Crear nuevo Cliente")
            setColorBoton("color1")
        }
        else{
            setTextoBoton("Mostra todos los Clientes")
            setColorBoton("color2")
        }

    },[mostrarTabla])


    return (
        
        <div>
            <Primero/>
            
                    
            <h2>Pagina de administracion de clientes</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={colorBoton} >{textoBoton}</button>
      
            {mostrarTabla?
             <TablaCliente listaClientes={cliente}/>:
             <FormularioCreacionCliente  funcionParaMostrarLaTabla={setMostrarTabla} listaClientes={cliente} funcionParaAgregarUnCliente={setCliente}/>
            }

            <ToastContainer position="top-center"autoClose={5000} closeOnClick/>
               
        </div>

    )
}

export default Clientes;

const TablaCliente=({listaClientes})=>{
   
    return(
        
        
        <table className="tabla_producto">
            <thead>
                <tr>
                    <th >NOMBRES</th>
                    <th >APELLIDOS</th>
                    <th >DIRECCION</th>
                    <th >ID</th>
                    <th>FECHA_CREACION</th>
                    <th >EMAIL</th>
                    <th >CELULAR</th>
                    
                </tr>
            </thead> 
            <tbody>   
                {listaClientes.map((cliente)=>{
                    return (
                        <tr> 
                            <td >{cliente.a}</td>
                            <td >{cliente.b}</td>
                            <td >{cliente.c}</td>
                            <td >{cliente.d}</td>
                            <td >{cliente.e}</td>
                            <td >{cliente.f}</td>
                            <td >{cliente.g}</td>     
                        </tr>
                    );
                })}
            </tbody>  
          
        </table>
        

    ) 
              
}

const FormularioCreacionCliente=({funcionParaMostrarLaTabla,listaClientes,funcionParaAgregarUnCliente})=>{
   
    const[nombres,setNombres]=useState("");
    const[apellidos,setApellidos]=useState("");
    const[direccion,setDireccion]=useState("");
    const[cedula,setCedula]=useState("");
    const[date,setDate]=useState("");
    const[correo,setCorreo]=useState("");
    const[celular,SetCelular]=useState("");
    const envirAlBakend=()=>{
      
        if(nombres==="" || apellidos==="" || correo==="" || cedula===""){
            toast.error("CLIENTE NO REGISTRADO- INGRESE TODA LA INFORMACION SOLICITADA");
        }
        else{
        toast.success("Cliente creado con Exito");
        funcionParaMostrarLaTabla(true);
        funcionParaAgregarUnCliente([...listaClientes,{a:nombres,b:apellidos,c:direccion,d:cedula,e:date,f:correo,g:celular},]);
        }
    };

    return( 
        <form className="form-register">
            <label htmlFor='nombres'> Nombres del Cliente
                 <input className="controls" type="text" name="nombres"  placeholder="Nombre de usuario" value={nombres} onChange={(e)=>{setNombres(e.target.value)}} required/>
            </label>
            <label htmlFor='apellidos'> Apellidos del Cliente
                 <input className="controls" type="text" name="apellidos" placeholder="Apellidos de usuario" value={apellidos} onChange={(e)=>{setApellidos(e.target.value)}} required/>
            </label>
            <label htmlFor='direccion'> direccion de Residencia cliente
                 <input className="controls" type="texto" name="direccion"  placeholder="Direccion del cliente" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}} required/>
            </label>
            <label htmlFor='cedula'> Cedula del cliente
                 <input className="controls" type="number" name="cedula"  placeholder="Documento de ID " value={cedula} onChange={(e)=>{setCedula(e.target.value)}} required/>
            </label>
            <label htmlFor='date'> Fecha creacion del cliente
                 <input className="controls" type="date" name="date"  placeholder="Fecha de creacion" value={date} onChange={(e)=>{setDate(e.target.value)}} required/>
            </label>

            <label htmlFor='correo'> Correo del cliente
                 <input className="controls" type="email" name="correo"  placeholder="Correo" value={correo} onChange={(e)=>{setCorreo(e.target.value)}} required/>
            </label>

            <label htmlFor='celular'> Celular del cliente
                 <input className="controls" type='number' name="celular"  placeholder="Celular" value={celular} onChange={(e)=>{SetCelular(e.target.value)}} required/>
            </label>

                      
            <button class="botonsito2" onClick={()=>{envirAlBakend()}} type="button"> Registrar Cliente </button>
     
        </form>

    
    )
}



