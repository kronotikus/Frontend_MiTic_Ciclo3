
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import Primero from 'pages/Primero'


import 'react-toastify/dist/ReactToastify.css';

const ProductosBackend=[
    {
    a: 'MOTOROLA',
    b: 430000,
    c: 'MT03',
    d: '25/08/2021',
    
    },

    {
    a: 'XIAOMI',
    b: 750000,
    c: 'REDMI NOTE 9',
    d: '21/09/2021',
    
    },

    {
    a: 'XIAOMI ',
    b: 1200000,
    c: 'REDMI NOTE 10S',
    d: '12/04/2020',

},
{
    a: 'APPLE ',
    b: 3400000,
    c: 'IPHONE 11 128 GB',
    d: '12/04/2020',

},

];

const Productos1 = () => {
    const[mostrarTabla,setMostrarTabla]=useState(true);
    const [textoBoton,setTextoBoton]=useState("Crear nuevo Usuario");
    const[productos,setProductos]=useState([]);
    const[colorBoton,setColorBoton]=useState();
  
    useEffect(()=>{
        //obtener lista de usuarios desde el backend
        setProductos(ProductosBackend);
    },[]);

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton("Crear nuevo Producto")
            setColorBoton("color1")
        }
        else{
            setTextoBoton("Mostra todos los Productos")
            setColorBoton("color2")
        }

    },[mostrarTabla])


    return (
        
        <div>
            <Primero/>
            
                    
            <h2>Pagina de administracion de Productos</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={colorBoton} >{textoBoton}</button>
      
            {mostrarTabla?
             <TablaProductos listaProductos={productos}/>:
             <FormularioCreacionUsuarios  funcionParaMostrarLaTabla={setMostrarTabla} listaProductos={productos} funcionParaAgregarUnProducto={setProductos}/>
            }

            <ToastContainer position="top-center"autoClose={5000} closeOnClick/>
               
        </div>

    )
}

export default Productos1;

const TablaProductos=({listaProductos})=>{
    const[busqueda,setBusqueda]=useState('')
    const[productosFiltrados,setProductosFiltrados]=useState(listaProductos)

    useEffect(()=>{
        setProductosFiltrados(
            listaProductos.filter((elemento)=>{
            return elemento.a.toLowerCase().includes(busqueda.toLowerCase());
        })
        ); 

    },[busqueda])




   
    return(
      <div>
        <input className="filtro" placeholder="Buscar" value={busqueda} onChange={e=>setBusqueda(e.target.value)}>
        </input> 
        <table className="tabla_producto">
            <thead>
                <tr>
                    <th >MARCA</th>
                    <th >PRECIO</th>
                    <th >MODELO</th>
                    <th>FECHA_CREACION</th>
                    
                </tr>
            </thead> 
            <tbody>   
                {productosFiltrados.map((productos)=>{
                    return (
                        <tr> 
                            <td >{productos.a}</td>
                            <td >{productos.b}</td>
                            <td >{productos.c}</td>
                            <td >{productos.d}</td>     
                        </tr>
                    );
                })}
            </tbody>  
          
        </table>
      </div>  

    ) 
              
}

const FormularioCreacionUsuarios=({funcionParaMostrarLaTabla,listaProductos,funcionParaAgregarUnProducto})=>{
   
    const[marca,setMarca]=useState("");
    const[precio,setPrecio]=useState("");
    const[modelo,setModelo]=useState("");
    const[fecha,setFecha]=useState("");
    const envirAlBakend=()=>{
      
        if(marca==="" || precio==="" || modelo==="" || fecha===""){
            toast.error("PRODUCTO NO REGISTRADO- INGRESE TODA LA INFORMACION SOLICITADA");
        }
        else{
        toast.success("Producto creado con Exito");
        funcionParaMostrarLaTabla(true);
        funcionParaAgregarUnProducto([...listaProductos,{a:marca,b:precio,c:modelo,d:fecha},]);
        }
    };

    return( 
        <form className="form-register">
           
<           label htmlFor='marca'>Nombre de la marca

                <select className="controls" name="marca"  value={marca} onChange={(e)=>{setMarca(e.target.value)}}> 
                    <option disabled>Escoja una opcion </option> 
                    <option>Apple</option> 
                    <option>Xiami</option>  
                    <option>Motorola</option> 
                    <option>Samsung</option>  
                    <option>Alcatel</option> 
                    <option>Sony</option>  
                    <option>Huawei</option> 
                    <option>Lg</option>
                    <option>Nokia</option>  
                    <option>Lenovo</option> 
                
                </select>
            </label>    

            <label htmlFor='precio'> Precio del Equipo
                 <input className="controls" type="number" name="precio" placeholder="Precio del equipo" value={precio} onChange={(e)=>{setPrecio(e.target.value)}} required/>
            </label>
            <label htmlFor='modelo'> Model del equipo
                 <input className="controls" type="text" name="modelo"  placeholder="Modelo del equipo" value={modelo} onChange={(e)=>{setModelo(e.target.value)}} required/>
            </label>
        
            <label htmlFor='fecha'> Fecha creacion del equipo en el sistema
                 <input className="controls" type="date" name="date"  placeholder="Fecha de creacion" value={fecha} onChange={(e)=>{setFecha(e.target.value)}} required/>
            </label>

        
            <button class="botonsito2" onClick={()=>{envirAlBakend()}} type="button"> Registrar Producto</button>
     
        </form>

    
    )
}



