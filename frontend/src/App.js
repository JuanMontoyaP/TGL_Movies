import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App(){
  return (
//     <ThemeProvider
//   breakpoints={['xl', 'lg', 'md', 'sm']}
//   minBreakpoint="sm"
// >
      <Home/>
    // </ThemeProvider>
  );
}

export default App;
