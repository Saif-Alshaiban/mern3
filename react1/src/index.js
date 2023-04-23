import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material';

import { UserContextProvider } from './userContext';
const theme = createTheme({

  palette:{
   primary:{
    main: '#7F8DE1',
   },
   secondary:{
    main: '#C0C0C0'
   }
  },
  typography:{
    h1:{
      fontSize:'3rem',
      fontWeight:600,
      
    },
    h2:{
      fontSize:'1.75rem',
      fontWeight:500,
      
    },
    h3:{
      fontSize:'1.25rem',
      fontWeight:450,
      
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>

    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider> 
    
    </UserContextProvider>
   
  
   
    
  </React.StrictMode>
);

