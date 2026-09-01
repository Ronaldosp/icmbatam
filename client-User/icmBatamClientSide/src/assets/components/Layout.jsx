import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";
import Footer from "../components/Footer";

export default function Layout(){
    return <>
        <ScrollToHash />
        <NavBar/>
        <Outlet/>
        <Footer />
    </>
}