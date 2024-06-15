import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';
import Hotels from './views/Hotels/Hotels';


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
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