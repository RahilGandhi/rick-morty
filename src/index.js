import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import Character from './pages/Character';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/character',
    element : <Character/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


