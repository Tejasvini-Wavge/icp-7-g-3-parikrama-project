import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';
<<<<<<< HEAD
import Hotels from './views/Hotels/Hotels';
=======
import Home from './views/Stays/Stays';
>>>>>>> 23c8795373d4ab245d4eeadeb813e27622ee5338


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    
    {
        path: "/",
        element:<Home/>
    },
  //   {
  //     path: "/flights",
  //     element:<Flights/>
  // }
//   {
//     path: "/hotels",
//     element:<Hotels/>
// },
// {
//   path: "/rental",
//   element:<Rental/>
// },
// {
//   path: "/cars",
//   element:<Cars/>
// },
//   path: "/register",
//   element:<Register/>
    {
        path: "/",
        element: <Register/>
    },

    {
        path:"/Hotels",
        element:<Hotels/>
    }
]);
root.render(<RouterProvider router={router}/>
);