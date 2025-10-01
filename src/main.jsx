import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './Components/Root/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Blogs from './Components/Blog/Blogs.jsx';
import Gallary from './Components/Gallary/Gallary.jsx';
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';



const fetchPrimise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {index: true, Component: Home},
      {path: "about" , Component: About},
      {path:"blog", Component: Blogs},

      {path:"gallary",
       loader: () => fetch ('https://jsonplaceholder.typicode.com/albums'),
       Component: Gallary
      },

      {path:"user",
        element: 
        <Suspense fallback={<h1>Loadinf...</h1>}> 
            <User fetchPrimise={fetchPrimise} />
        </Suspense>
      },

      {path:"contact", Component: Contact}
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
