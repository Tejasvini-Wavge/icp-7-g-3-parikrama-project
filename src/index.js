import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';
<<<<<<< HEAD
import Hotels from './views/Hotels/Hotels';
=======
import Home from './views/Stays/Stays';
<

=======
>>>>>>> 23c8795373d4ab245d4eeadeb813e27622ee5338
>>>>>>> d42a0291f6cc728939f9252066adcb9249b282c0

git 
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
  {
    path: "/Hotels",
    element:<Hotels/>
},
// {
//   path: "/Rental",
//   element:<Rental/>
// },
// {
//   path: "/Cars",
//   element:<Cars/>
// },

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