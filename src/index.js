import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';
import Hotels from './views/Hotels/Hotels';
import Home from './views/Stays/Stays';
<<<<<<< HEAD
import Rental from './views/Rental/Rental';
=======
import Cars from './views/Cars/Cars'
>>>>>>> 26ddf0985d2d023677be8d7048ba56b2fbccae97

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    
    {
        path: "/",
        element:<Home/>
    },
//     {
//       path: "/Flights",
//       element:<Flights/>
//   },
<<<<<<< HEAD
  {
    path: "/Hotels",
    element:<Hotels/>
},
 {
   path: "/Rental",
   element:<Rental/>
 },
// {
//   path: "/Cars",
//   element:<Cars/>
// },
=======
 
// {
//   path: "/Rental",
//   element:<Rental/>
// },
{
  path: "/Cars",
  element:<Cars/>
},
>>>>>>> 26ddf0985d2d023677be8d7048ba56b2fbccae97

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