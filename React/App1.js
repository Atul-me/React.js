import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";



const Applayout = () => (
  <div className="main-container">
    <Header />
    <Outlet />
  </div>
);

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<Applayout />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenu  />
      },
    ],
    errorElement:<Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
