import React from "react";
import LandingNav from "../Elements/LandingPageElements/Navbar";
import Hero from "../Elements/LandingPageElements/Hero";
import AboutUs from "../Elements/LandingPageElements/AboutUs";
import About2 from "../Elements/LandingPageElements/About2";
import Gallery from "../Elements/LandingPageElements/Gallery";
import Footer from "../Fragments/Footer";
import Events from "../Elements/LandingPageElements/Events";
import Contact from "../Elements/LandingPageElements/Contact";

const LandingPage = () => {
    return (
        <>
        <LandingNav/>
        <Hero/>
        <AboutUs/>
        <About2/>
        <Gallery/>
        <Events/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default LandingPage;