import React, { useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Primero from './Primero';

const InfoVentasBackend=[
  {
  a: '18.966.314',
  b: 'Soluciones.SAS',
  c: '1/08/2021',
  d: '1.000.000',
  e:  '179654'

  },
  /*
  {
  a: '1.547.899.653',
  b: 'Importadoras.SAS',
  c: '15/08/2021',
  d: '5.000.000',
  e: '135874'

  },

  {
  a: '65.144.852',
  b: 'InfoCelulares',
  c: '10/09/2021',
  d: '500.000',
  e: '154698'

},
{
  a: '156.388.745',
  b: 'Alcaldía del Valle',
  c: '31/10/2021',
  d: '1.500.000',
  e: '35465',

},
*/
];

const InfoVentaProductoBackend=[
  {
  a: '0012',
  b: '200.000',
  c: '3',
  d: '600.000',
  },

  {
  a: '0015',
  b: '150.000',
  c: '2',
  d: '300.000',
  },

  {
  a: '0020',
  b: '100.000',
  c: '1',
  d: '100.000',
  },


];

const InfoVentas = () => {
  const [mostrarTablaInfoVentas, setMostarTablaInfoVentas] = useState(true);
  const [InfoVentas, setInfoVentas] = useState([]);
  const [mostrarTablaInfoVentaProducto, setMostarTablaInfoVentaProducto] = useState(true);
  const [InfoVentaProducto, setInfoVentaProducto] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Texto Botón');
  const [colorBoton, setColorBoton] = useState('Color Botón');
  const [logoBoton, setLogoBoton] = useState('Logo Botón');
  const [espacioBoton, setEspacioBoton] = useState('Espacio Botón');

useEffect(()=>{
    setInfoVentas(InfoVentasBackend);
},[]);

useEffect(()=>{
  setInfoVentaProducto(InfoVentaProductoBackend);
},[]);

  useEffect(() => {
  }, [mostrarTablaInfoVentas]);
  return (
  <div>
    <Primero/>
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
      </div>
      {mostrarTablaInfoVentas ? (
        <TablaInfoVentas listaInfoVentas={InfoVentas} />
      ) : (
        <TablaInfoVentas
          setMostarTablaInfoVentas={setMostarTablaInfoVentas}
          listaInfoVentas={InfoVentas}
          setInfoVentas={setInfoVentas}
        />
      )
      }
      {mostrarTablaInfoVentaProducto ? (
  <TablaInfoVentaProducto listaInfoVentaProducto={InfoVentaProducto} />
) : (
  <TablaInfoVentaProducto
    setMostrarTablaInfoVentaProducto={setMostarTablaInfoVentaProducto}
    listaInfoVentaProducto={InfoVentaProducto}
    setInfoVentaProducto={setInfoVentaProducto}
  />
)
}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  </div>
  );
};

const TablaInfoVentas = ({ listaInfoVentas }) => {
  useEffect(() => {
    console.log('Este es el listado de productos', listaInfoVentas);
  }, [listaInfoVentas]);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-center text-3xl m-14 font-medium text-gray-800'>INFORMACIÓN SOBRE LA VENTA</h2>
      <table class="Tabla_productos">
        <thead>
          <tr>
            <th class="w-3/2 bg-blue-200 font-mono md:font-mono">ID CLIENTE</th>
            <th class="w-2/4 bg-pink-200 font-mono md:font-mono">NOMBRE CLIENTE</th>
            <th class="w-3/2 bg-purple-200 font-mono md:font-mono">FECHA DE VENTA</th>
            <th class="w-2/4 bg-green-200 font-mono md:font-mono">VALOR VENTA</th>
            <th class="w-3/2 bg-yellow-200 font-mono md:font-mono">IDENTIFICADOR</th>
          </tr>
        </thead>
        <tbody>
          {listaInfoVentas.map((InfoVentas) => {
            return (
              <tr class="bg-gray-50 font-mono md:font-mono text-center">
                <td>{InfoVentas.a}</td>
                <td>{InfoVentas.b}</td>
                <td>{InfoVentas.c}</td>
                <td>{InfoVentas.d}</td>
                <td>{InfoVentas.e}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TablaInfoVentaProducto = ({ listaInfoVentaProducto }) => {
  useEffect(() => {
    console.log('Este es el listado de productos', listaInfoVentaProducto);
  }, [listaInfoVentaProducto]);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-center text-3xl m-14 font-medium text-gray-800'>INFORMACIÓN SOBRE LOS PRODUCTOS</h2>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="w-3/2 bg-blue-200 font-mono md:font-mono">ID PRODUCTO</th>
            <th class="w-2/4 bg-pink-200 font-mono md:font-mono">PRECIO UNITARIO</th>
            <th class="w-3/2 bg-purple-200 font-mono md:font-mono">CANTIDAD</th>
            <th class="w-3/2 bg-green-200 font-mono md:font-mono">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {listaInfoVentaProducto.map((InfoVentaProducto) => {
            return (
              <tr class="bg-gray-50 font-mono md:font-mono text-center">
                <td>{InfoVentaProducto.a}</td>
                <td>{InfoVentaProducto.b}</td>
                <td>{InfoVentaProducto.c}</td>
                <td>{InfoVentaProducto.d}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InfoVentas;
