import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import FaQ from "../../Pages/FaQ/FaQ/FaQ";
import Home from "../../Pages/Home/Home/Home";

 export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/faq',
            element:<FaQ></FaQ>
           },
           {
            path:'/courses/:id',
            element:<Courses></Courses>
           },
        ]
    }
 ])