import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";

const App = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className={`flex flex-col min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 ${theme === 'dark' ? 'animated-bg-dark' : 'animated-bg-light'}`}>
            <NavBar />
            <main className="flex-grow">
                <Routes>
                    <Route path="portfolio/" element={<Intro handleThemeSwitch={handleThemeSwitch} />} />
                    <Route path="portfolio/skills" element={<Skills />} />
                    <Route path="portfolio/projects" element={<Portfolio />} />
                    <Route path="portfolio/career" element={<Timeline />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

// className="flex flex-col min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 font-inter"

export default App;
