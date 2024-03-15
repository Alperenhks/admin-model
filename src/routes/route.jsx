import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/admin",
        element:<Home/>
    },
])


export default routes