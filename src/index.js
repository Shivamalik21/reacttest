import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Newuser from './pages/Newuser';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
path:"/",
element:<Dashboard/>
    },{
      path:"/user",
      element:<User/>
    },
    {
      path:"/newuser",
      element:<Newuser/>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();