import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './views/Register/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Register/>
    }
]);
root.render(<RouterProvider router={router}/>
);