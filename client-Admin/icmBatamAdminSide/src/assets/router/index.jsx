import {createBrowserRouter , redirect} from 'react-router-dom'
import HomePage from '../views/HomePage'
import Layout from '../component/Layout'
import LoginPage from '../views/LoginPage'
import ResgisterPage from '../views/RegisterPage'
import EventsPage from '../views/EventsPage'

export default createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        loader:()=>{
            console.log(localStorage.access_token);
            //if(!localStorage.access_token) return redirect('/login')
           // return null
        },
        children:[
            {
                index:true,
                path:"/",
                element:<HomePage/>,
            },
            {
                path:"/register",
                element  :<ResgisterPage/>
            },
            {
                path:"/events",
                element  :<EventsPage/>
            },
        ]
    },
    {
        path:"/login",
        element:<LoginPage/>,
        loader:()=>{
            console.log(localStorage.access_token);
            //if(localStorage.access_token) return redirect('/')
            //return null
        }
    },
    
])