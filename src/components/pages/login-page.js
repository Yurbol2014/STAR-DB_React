
import React from 'react';
import { Navigate } from "react-router-dom"


const LoginPage = ({isLoggedin, onLogin})=>{

  if(isLoggedin){
   <Navigate to={'/'}/>
  }
   
   return(
      <div className='jumbotron'>
         <p>Login to see secret page</p>
         <button
         className='btn btn-primary'
         onClick={onLogin}>
            Login

         </button>

      </div>
   );

};

export default LoginPage;
