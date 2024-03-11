import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Body from './components/Body';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DashboardMainpage from './components/DashboardMainpage';

const router=createBrowserRouter([  
  {
   path:"/",
   element:<App />,
   children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
      children:[
        {
          path:"/dashboard",
          element:<DashboardMainpage/>
        }
      ]
    }

   ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
