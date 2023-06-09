import React from "react";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";
import PopularSir from "./PopularSir/PopularSir";
import { Helmet } from "react-helmet-async"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MI Learning | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularSir></PopularSir>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;