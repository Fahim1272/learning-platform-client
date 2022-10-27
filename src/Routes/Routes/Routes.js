import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import FaQ from "../../Pages/FaQ/FaQ/FaQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses')
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
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
         },
         {
            path: '/courses',
            element: <Courses></Courses>,
            loader: ({ params }) => fetch(`http://localhost:5000/courses/${[params.id]}`)
         },
         {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/courses/${[params.id]}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   }
])