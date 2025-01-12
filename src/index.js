import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './App'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={appRouter} />
  // </React.StrictMode>
);

// If you want to use performance monitoring, uncomment the following line:
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);
