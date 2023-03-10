import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Checkout from "../../Pages/CheckOut/Checkout";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import FaQ from "../../Pages/FaQ/FaQ/FaQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://learning-platform-server-jet.vercel.app/courses')
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/faq',
            element: <FaQ></FaQ>
         },
         {
            path: '/category/:id',
            element: <Courses></Courses>,
            loader: ({ params }) => fetch(`https://learning-platform-server-jet.vercel.app/category/${params.id}`)
         },
         {
            path: '/courses',
            element: <Courses></Courses>,
            loader: ({ params }) => fetch(`https://learning-platform-server-jet.vercel.app/courses/${[params.id]}`)
         },
         {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`https://learning-platform-server-jet.vercel.app/courses/${[params.id]}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         //editing code
         {
            path: '/checkout',
            element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
            
         },
         // {
         //    path: '/checkout/:id',
         //    element:<Checkout></Checkout>,
         //    loader: ({ params }) => fetch(`https://learning-platform-server-jet.vercel.app/courses/${[params.id]}`)
         // },
         // old code
         // {
         //    path: '/checkout',
         //    element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
         // },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   }
])