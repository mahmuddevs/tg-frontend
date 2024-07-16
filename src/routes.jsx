import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Person from "./Pages/Person";

const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/:user-name",
                element: <Person />
            },
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default routes