import { useState , useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import CellGroups from "../components/CellGroups";
import Locations from "../components/Locations";
import ContactUs from "../components/ContactUs";
import Giving from "../components/Giving";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />

            <section id="cellgroup">
                <CellGroups />
            </section>

            <section id="location">
                <Locations />
            </section>

            <section id="contact">
                <ContactUs />
            </section>

            <section id="giving">
                <Giving />
            </section>

            <Footer />
        </div>
    );
}