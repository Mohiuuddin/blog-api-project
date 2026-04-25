import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { useEffect } from "react";

import './App.css';
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ErrorPage } from "./components/error";

function Layout(){
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const tokenFromUrl = params.get("token");
  const roleFromUrl = params.get("role");
  const usernameFromUrl = params.get("username");

  // Save if coming from client redirect
  if (tokenFromUrl) {
    localStorage.setItem("token", tokenFromUrl);
    localStorage.setItem("role", roleFromUrl);
    localStorage.setItem("username", usernameFromUrl);

    // Clean URL
    window.history.replaceState({}, document.title, "/");
  }

  // NOW check from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "ADMIN") {
    window.location.href = "http://localhost:5173/login";
  }
}, []);

  return(
     <>
     <div>
      <Navbar />
      <Outlet />
      <Footer/>
     </div>
      
    </>
  );
}

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout/>,
  errorElement: <ErrorPage/>,
  children: [
    {index: true, element: <Dashboard/>},
    {path: "create", element: <CreatePost/>},
    {path:"edit/:id", element: <EditPost/>}
  ],
}
]);



function App() {

  return <RouterProvider router={router}/>;
  
}

export default App
