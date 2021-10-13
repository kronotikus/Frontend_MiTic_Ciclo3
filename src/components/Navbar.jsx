import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
       </div>
       <section className='titulo'>Adminintración de usuarios </section>
     </nav>
    </>
  )
}

export default Navbar;
