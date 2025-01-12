import React, { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
// import About from "./components/About";
// import Cart from "./components/Cart";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
import Head from "./components/Head";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Hra from "./utils/Hra";
import AppStore from "./utils/store/AppStore";
import {Provider} from "react-redux"

const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));
const Contact = lazy(() => import("./components/Contact"));
const Login = lazy(() => import("./components/Login"));

const App = () => {
  const[ne,setNe]=useState("")

  useEffect(()=>{
  const obj={
    data: "Bye to context"
  }
  setNe(obj.data)
  },[])
  return (
    <Provider store={AppStore}>
    <Hra.Provider value={{out:ne,res:"THis is react course...",setNe }}>
      <div>
        <Head />
        <Outlet />
      </div>
      </Hra.Provider>
      </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>wait its loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1> wait its loading....</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1> wait its loading....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<h1> wait its loading....</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/menu/:id",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
