import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter ,RouterProvider } from "react-router-dom";
import About from "./components/About";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div> 
  );
};

const appRouter = BrowserRouter([
  {
   path: "/",
   element: <AppLayout />
},
{
  path: "/about",
  element: <About />
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}  />);
