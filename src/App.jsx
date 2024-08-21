import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

const App = () => {
    return (
        <div className="App">
            <Intro />
            <Portfolio />
            <Timeline />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
