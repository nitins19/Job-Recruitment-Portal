import React,{useContext} from "react";
import {AdminContext, UserContext} from '../App.js';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
function RenderMenu()
{
    const{state,dispatch}=useContext(UserContext);
    const{state1,dispatch1}=useContext(AdminContext);
    if(state)
    {
      return(<>
           <li className="nav-item active">
       <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
       <li className="nav-item">
       <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
      <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dashboard
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/applyjobs">Apply For Jobs</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/appliedjobs">Applied Jobs</NavLink></li>
          </ul>
        </li>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
      

      </>)
    }
    if(state1)
    {
      return(<>
           <li className="nav-item active">
       <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
       <li className="nav-item">
       <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
      <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dashboard
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/postjob">Post Jobs</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/jobseekers">Job Seekers</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/jobsposted">Jobs Posted</NavLink></li>
         
          </ul>
        </li>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
      

      </>)
    }
    else
    {
      return(<>
           <li className="nav-item active">
       <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
       <li className="nav-item">
       <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
      <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Login
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/login">Users</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/adminlogin">Company</NavLink></li>
          </ul>
        </li>
      </li>
       <li className="nav-item">
       <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Register
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/signup">Users</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/adminsignup">Company</NavLink></li>
          </ul>
        </li>
      </li>
      </>)
    }
  }
  export default RenderMenu;