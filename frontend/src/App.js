import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './config/AllRoutes'
import {UserContextProvider} from './context/UserContext'
function App(){
  return (
  <UserContextProvider>
<Router> 
<AllRoutes/>
</Router>
   </UserContextProvider>

  );
}

export default App;
