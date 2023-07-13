import logo from './logo.svg';
import './App.scss'
import React, { lazy } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <Detail/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}/>      
    </div>
  );
}

export default App;
