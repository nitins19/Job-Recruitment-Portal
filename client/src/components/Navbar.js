import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import RenderMenu from './RenderMenu';
function Navbar()
{
  return(<>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <NavLink className="navbar-brand" to="/weather">Weather</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    
   <RenderMenu/>
    </ul>
  </div>
</nav>
  </>);
}
export default Navbar;
