import React,  { lazy } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import Body from './components/Body';
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import GptSearch from "./components/GptSearch";


// const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <DashBoard />
            },
            {
                path: "/Login",
                element: <Login />
            },
            {
                path: "/list",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/gpt",
                element: <GptSearch />
            },
            // {
            //     path: "/grocery",
            //     element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
            // },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);