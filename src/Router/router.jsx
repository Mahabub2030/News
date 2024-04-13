import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
        {
                path:'/',
                element:<Root></Root>,
                children: [
                        {
                                path:'/home',
                                element:<Home></Home>
                        },
                        {
                                path:'login',
                                element:<Login></Login>
                        }
                ]
        }
])

export default router;