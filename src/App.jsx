// import {createBrowserRouter} from "react- router- dom"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Splashscreen from './Componenets/Firstpage/Firstpage'
import Firstsup from './Componenets/Signup/Firstsup'
import Header from './Componenets/Header/Header'
import Signjobseeker from './Componenets/Signup/Signjobseeker'
import Signemployer from './Componenets/Signup/Signemployer'
import Login from './Componenets/Login/Login'
import Homepage from './Componenets/Hompage/Homepage'
import Homescroll from './Componenets/Hompage/Homescroll'
import Jobspage from './Componenets/JobsPage/Jobspage'
import Allaccounts from './Componenets/JobsPage/Allaccounts'
import Alljobs from './Componenets/JobsPage/Alljobs'
import Allremote from './Componenets/JobsPage/Allremote'
import Allfield from './Componenets/JobsPage/Allfield'
import Authheaders from './Componenets/Authheaders'
import Postjobs from './Componenets/PostJobs/Postjobs'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Splashscreen/>,
  },
  {
    path: "/signup",
    element: <Firstsup/>,
  },
  {
    path: "/head",
    element: <Header/>,
  },
  {
    path: "/signUpJobSeeker",
    element: <Signjobseeker/>,
  },
  {
    path: "/signup/asemployer",
    element: <Signemployer/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },
  {
    path: "/homescroll",
    element: <Homescroll/>,
  },
  {
    path: "/account",
    element: <Allaccounts/>,
  },
  {
    path: "/alljobss",
    element: <Alljobs/>,
  },
  {
    path: "/job",
    element: <Jobspage/>,
  },
  {
    path: "/allremote",
    element: <Allremote/>,
  },
  {
    path: "/postjobs",
    element: <Postjobs/>,
  },
  {
    path: "/allfield",
    element: <Allfield/>,
  },
  {
    path: "/",
    element: <Authheaders/>,
    children:[
    
    ]
  }
])


function App() {
   return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
