import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";
import Footer from "../components/Footer";

export default function Layout() {

    return (
        <div className="layout">

            <ScrollToHash />

            <NavBar />

            <main className="layout__content">
                <Outlet />
            </main>

            <div className="layout__footer">
                <Footer />
            </div>

        </div>
    );
}