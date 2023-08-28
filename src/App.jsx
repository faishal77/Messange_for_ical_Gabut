import {createBrowserRouter, RouterProvider,}from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Menu } from './Components/Menu';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import VerifikasiEmail from './Components/VerifikasiEmail';
import Settings from './Components/Settings';
import { CreateMessange } from './Components/CreateMessange';
import EditProfile from './Components/EditProfile';
import { Information } from './Components/Information';
import ForgotPassword from './Components/ForgotPassword';
import ChangePassword from './Components/ChangePassword';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Menu/>
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/signup",
    element:<Register/>
  },
  {
    path:"/Verifikasi-email",
    element:<VerifikasiEmail/>
  },
  {
    path:"/Home",
    element:<Home/>,
  },
  {
    path:"/CreateMessange",
    element:<CreateMessange/>,
  },
  {
    path:"/Setting",
    element:<Settings/>,
  },
  {
    path:"/Edit-profile",
    element:<EditProfile/>,
  },
  {
    path:"/Information",
    element:<Information/>,
  },
  {
    path:"/Forgot-Password",
    element:<ForgotPassword/>,
  },
  {
    path:"/Change-Password",
    element:<ChangePassword/>,
  }
]) 

function App() {
  return (
    <>
        <RouterProvider router={router}/>
        <ToastContainer/>
    </>
  )
}

export default App
