import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../shared/ui/main-layout";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element: <div>todolist</div>
            },
            {
                path:":id",
                element: <div>todo detail</div>
            }
        ]
    }
])