import { useState } from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Notes from "./components/notes";
import View from "./components/View";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/notes",
    element: (
      <div>
        <Navbar />
        <Notes />
      </div>
    ),
  },
  {
    path: "/notes/:id",
    element: 
    <div>
      <Navbar/>
      <View/>
    </div>,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
