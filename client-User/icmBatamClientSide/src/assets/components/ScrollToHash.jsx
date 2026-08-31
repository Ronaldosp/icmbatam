import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {

        if (location.hash) {
            const id = location.hash.substring(1);

            setTimeout(() => {
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);

        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }

    }, [location.pathname, location.hash]);

    return null;
}