import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Popular from './components/Popuplar';
import Battle from './components/Battle';
import Home from './components/Home';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "popular/:lang?",
        element: <Popular />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <h2>404 Not Found</h2>,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router}/>

export default App;
