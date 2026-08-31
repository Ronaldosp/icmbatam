import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

export default function Layout(){
    return <>
        <ScrollToHash />
        <NavBar/>
        <Outlet/>
    </>
}