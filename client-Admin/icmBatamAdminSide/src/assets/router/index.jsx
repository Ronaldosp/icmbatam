import {createBrowserRouter , redirect} from 'react-router-dom'
import HomePage from '../views/HomePage'
import Layout from '../components/Layout'
import LoginPage from '../views/LoginPage'
import ResgisterPage from '../views/ResgisterPage'

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
                path:"/login",
                element  :<LoginPage/>
            },
            {
                path:"/register",
                element  :<ResgisterPage/>
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