import './App.css'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ErrorPage } from './components/error';
import Home  from './pages/Home';
import  PostPage  from './pages/PostPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';


function Layout(){
    return(
      
      <>
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
      
          {index: true, element: <Home/>},
          {path: "post/:id", element: <PostPage/>},
          {path: "login", element: <Login/>},
          {path: "register", element: <Register/>}
     
        ]
      }
  ]);

function App() {
  
  return <RouterProvider router={router}/>;
}

export default App
