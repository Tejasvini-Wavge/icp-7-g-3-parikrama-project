import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';
import Hotels from './views/Hotels/Hotels';
import Home from './views/Stays/Stays';
import Cars from './views/Cars/Cars';
import Rental from './views/Rental/Rental';
import Flights from './views/Flights/Flights';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    },
    {
      path: "/Flights",
      element:<Flights/>
  },

 {
   path: "/Rental",
   element:<Rental/>
 },
{
  path: "/Cars",
  element:<Cars/>
},

    {
        path: "/Register",
        element: <Register/>
    },

    {
        path:"/Hotels",
        element:<Hotels/>
    }
]);
root.render(<RouterProvider router={router}/>
);