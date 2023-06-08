import React from "react";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";
import PopularSir from "./PopularSir/PopularSir";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularSir></PopularSir>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;