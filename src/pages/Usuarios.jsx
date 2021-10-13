

import { useState } from 'react';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import Primero from 'pages/Primero'


import 'react-toastify/dist/ReactToastify.css';

const usuriosBackend=[
    {
    n: 'DANIEL ALEJANDRO',
    a: 'PATINO PASQUEL',
    e: 'vendedor1@bios.com',
    c: '1061723987',
    d: '25/08/2021',
    r: 'Vendedor',
    e: 'Pendiente',
    },

    {
    n: 'JAVIER DAVID',
    a: 'ROSAS CASAS',
    e: 'vendedor4@bios.com',
    c: '1061723666',
    d: '21/09/2021',
    r: 'Vendedor',
    e: 'Autorizado',
    },

    {
    n: 'CRISTIAN ',
    a: 'LOPEZ PASQUEL',
    e: 'administrador5@bios.com',
    c: '1060980987',
    d: '12/04/2020',
    r: 'Administrador',
    e: 'No Autorizado',
},

];

const Usuarios = () => {
    const[mostrarTabla,setMostrarTabla]=useState(true);
    const [textoBoton,setTextoBoton]=useState("Crear nuevo Usuario");
    const[usuarios,setUsuarios]=useState([]);
    const[colorBoton,setColorBoton]=useState();
  
    useEffect(()=>{
        //obtener lista de usuarios desde el backend
        setUsuarios(usuriosBackend);
    },[]);

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton("Crear nuevo usuario")
            setColorBoton("color1")
        }
        else{
            setTextoBoton("Mostra todos los usuario")
            setColorBoton("color2")
        }

    },[mostrarTabla])


    return (
        
        <div>
            <Primero/>
            
                    
            <h2>Pagina de administracion de usuarios</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={colorBoton} >{textoBoton}</button>
      
            {mostrarTabla?
             <TablaUsuarios listaUsuarios={usuarios}/>:
             <FormularioCreacionUsuarios  funcionParaMostrarLaTabla={setMostrarTabla} listaUsuarios={usuarios} funcionParaAgregarUnUsuario={setUsuarios}/>
            }

            <ToastContainer position="top-center"autoClose={5000} closeOnClick/>
               
        </div>

    )
}

export default Usuarios;

const TablaUsuarios=({listaUsuarios})=>{
   
    return(
        
        
        <table className="tabla_producto">
            <thead>
                <tr>
                    <th >NOMBRES</th>
                    <th >APELLIDOS</th>
                    <th >EMAIL</th>
                    <th >ID</th>
                    <th>FECHA_CREACION</th>
                    <th >ROL</th>
                    <th >ESTADO</th>
                    
                </tr>
            </thead> 
            <tbody>   
                {listaUsuarios.map((usuarios)=>{
                    return (
                        <tr> 
                            <td >{usuarios.n}</td>
                            <td >{usuarios.a}</td>
                            <td >{usuarios.e}</td>
                            <td >{usuarios.c}</td>
                            <td >{usuarios.d}</td>
                            <td >{usuarios.r}</td>
                            <td >{usuarios.e}</td>     
                        </tr>
                    );
                })}
            </tbody>  
          
        </table>
        

    ) 
              
}

const FormularioCreacionUsuarios=({funcionParaMostrarLaTabla,listaUsuarios,funcionParaAgregarUnUsuario})=>{
   
    const[nombres,setNombres]=useState("");
    const[apellidos,setApellidos]=useState("");
    const[email,setEmail]=useState("");
    const[cedula,setCedula]=useState("");
    const[date,setDate]=useState("");
    const[rol,setRol]=useState("");
    const[Estado,setEstado]=useState("");
    const envirAlBakend=()=>{
      
        if(nombres==="" || apellidos==="" || email==="" || cedula===""){
            toast.error("USUARIO NO REGISTRADO- INGRESE TODA LA INFORMACION SOLICITADA");
        }
        else{
        toast.success("Usuario creado con Exito");
        funcionParaMostrarLaTabla(true);
        funcionParaAgregarUnUsuario([...listaUsuarios,{n:nombres,a:apellidos,e:email,c:cedula,d:date,r:rol,e:Estado},]);
        }
    };

    return( 
        <form className="form-register">
            <label htmlFor='nombres'> Nombres del Usuario
                 <input className="controls" type="text" name="nombres"  placeholder="Nombre de usuario" value={nombres} onChange={(e)=>{setNombres(e.target.value)}} required/>
            </label>
            <label htmlFor='apellidos'> Apellidos del usuario 
                 <input className="controls" type="text" name="apellidos" placeholder="Apellidos de usuario" value={apellidos} onChange={(e)=>{setApellidos(e.target.value)}} required/>
            </label>
            <label htmlFor='email'> Email del usuario del usuario 
                 <input className="controls" type="email" name="email"  placeholder="Correo del Usuario" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            </label>
            <label htmlFor='cedula'> Cedula del usuario
                 <input className="controls" type="number" name="cedula"  placeholder="Documento de ID " value={cedula} onChange={(e)=>{setCedula(e.target.value)}} required/>
            </label>
            <label htmlFor='date'> Fecha creacion del usuario
                 <input className="controls" type="date" name="date"  placeholder="Fecha de creacion" value={date} onChange={(e)=>{setDate(e.target.value)}} required/>
            </label>

            <label htmlFor='rol'>Rol del usuario
              <select className="controls" name="rol"  value={rol} onChange={(e)=>{setRol(e.target.value)}}> 
                 <option disabled>Escoja una opcion </option> 
                 <option>Vendedor</option> 
                 <option>Administrador</option>  
              </select>
            </label>

            <label htmlFor='estado'>Estado del usuario
              <select className="controls" name="estado"  value={Estado} onChange={(e)=>{setEstado(e.target.value)}}> 
                 <option disabled>Escoja una opcion </option> 
                 <option>Pendiente</option> 
                 <option>Autorizado</option>
                 <option>No Autorizado</option>    
              </select>
            </label>
                      
            <button class="botonsito2" onClick={()=>{envirAlBakend()}} type="button"> Registrar Usuario </button>
     
        </form>

    
    )
}



