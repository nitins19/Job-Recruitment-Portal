import React, { createContext,useReducer } from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import Signup from "./components/Signup";
import AdminSignup from "./components/AdminSignup";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import Weather from "./components/Weather";
import {initialState,reducer,reducer1} from "../src/reducer/UseReducer";
import AdminExtraPage from './components/AdminExtraPage';
import Postjobs from '../src/AdminDashboard/Postjobs';
import ApplyJobs from '../src/UserDashboard/ApplyJobs';
import AdminJobsPosted from '../src/AdminDashboard/AdminJobsPosted';
import JobSeekers from './AdminDashboard/Seekers/JobSeekers';
export const UserContext=createContext();
export const AdminContext=createContext();
const Routing=()=>{
  return(
  <Switch>
    <Route exact path='/'>
    <Home />
    </Route>
  
     <Route path='/about'>
    <About/>
    </Route>
  
     <Route path='/contact'>
    <Contact/>
    </Route>
  
     <Route path='/login'>
    <Login/>
    </Route>

    <Route path='/adminlogin'>
    <AdminLogin/>
    </Route>
  
     <Route path='/signup'>
    <Signup/>
    </Route>
    
    <Route path='/adminsignup'>
    <AdminSignup/>
    </Route>

    <Route path='/admin'>
    <AdminExtraPage/>
    </Route>

    <Route path='/postjob'>
    <Postjobs/>
    </Route>

    <Route path='/applyjobs'>
    <ApplyJobs/>
    </Route>

    <Route path='/jobsposted'>
    <AdminJobsPosted/>
    </Route>

    <Route path='/jobseekers'>
      <JobSeekers/>
    </Route>

    <Route path='/weather'>
    <Weather/>
    </Route>
  
    <Route path='/logout'>
    <Logout/>
    </Route>
  
    <Route>
      <ErrorPage/>
    </Route>
    
    </Switch>
  );
}
function App()
{
  const [state,dispatch]=useReducer(reducer,initialState);
  const [state1,dispatch1]=useReducer(reducer1,initialState);
  return(<>
<UserContext.Provider value={{state,dispatch}}>
<AdminContext.Provider value={{state1,dispatch1}}>
<Navbar/>
<Routing/>
</AdminContext.Provider>
  </UserContext.Provider>
  </>);
}
export default App;