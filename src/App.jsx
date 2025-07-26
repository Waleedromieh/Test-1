import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import Layout from "./components/layout/Layout";

export default function App() {

      let routes=  createBrowserRouter([
          {path:'/',element:<Layout/>,children:[
            {path:'/',element:<Home/>},
            {path:'about',element:<About/>},
            {path:'gallery',element:<Gallery/>},
          ]}
        ])



  return (<>
      <RouterProvider router={routes}></RouterProvider>
  </>
   
  )
}
