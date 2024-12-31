import Landing from "./landing/Landing";
 import Login from "./Login/Login";
import Reg from "./registration/Reg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Reg/>
    },
  ])
return(
  <>
  <RouterProvider router={router} />
  </>
)
}

export default App  
