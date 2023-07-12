import logo from './logo.svg';
import './App.scss'
import React, { lazy } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';


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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/> */}
      <RouterProvider router={router}/>      
    </div>
  );
}

export default App;
