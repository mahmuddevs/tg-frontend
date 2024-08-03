import { createBrowserRouter } from "react-router-dom";
import Template from "./layouts/Template"
import Person from "./pages/Person"
import Dashboard from "./layouts/Dashboard";
import Add from "./pages/dashboard/Add";
import Edit from "./pages/dashboard/Edit";
import ShowAll from "./pages/dashboard/ShowAll";


const routes = createBrowserRouter([
    {
        element: <Template />,
        children: [
            {
                path: "/:username",
                element: <Person />
            }
        ]

    },
    {
        element: <Dashboard />,
        path: "/dashboard",
        children: [
            {
                path: "/dashboard/add",
                element: <Add />
            },
            {
                path: "/dashboard/edit/:username",
                element: <Edit />
            },
            {
                path: "/dashboard/show-all",
                element: <ShowAll />
            },
        ]
    }
])

export default routes