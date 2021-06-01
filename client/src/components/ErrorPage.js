import React from 'react';
import {NavLink} from 'react-router-dom';
function ErrorPage()
{
  return(<>
  <div className="error_div">
  <h1>Page Not Found</h1>
  <p className="errorr">404</p>
  <NavLink className="error_route" to='/'>Back to HomePage</NavLink>
  </div>
  </>);
}
export default ErrorPage;