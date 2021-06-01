import React,{useEffect,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../App.js';
import {AdminContext} from '../App.js';
function Logout()
{
    const{state,dispatch}=useContext(UserContext);
    const{state1,dispatch1}=useContext(AdminContext);
    const history=useHistory();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json",
            },
            credentials:"include"
          }).then((res)=>{
            dispatch({type:"USER",payload:false})
            dispatch1({type:"ADMIN",payload:false})
              history.push('/login',{replace:true});
              if(res.status!==200)
              {
                  throw new Error('Logout Failed');
              }

          }).catch((err)=>{
              console.log(err);
          })
    })
return(<>
</>)
}
export default Logout;