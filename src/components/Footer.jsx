import React, { useEffect, useState } from "react";

const Footer = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    return (
        <footer
            className={`py-5 text-center ${
                fade ? "animate-fade-in-blur" : "opacity-0"
            }`}
        >
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Charlie Jay. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
