import React from "react";
import Navbar from "../Fragments/Navbar";
import Title from "../Fragments/Title";
import Footer from "../Fragments/Footer";
import CardList from "../Fragments/CardLayout";

const Homepage= () =>{
    return(
        <>
            <Navbar />
            <Title text='SCHEDULE OF EVENTS' />
            <CardList/>
            <Footer />
        </>
    );
}

export default Homepage;