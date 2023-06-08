import React from "react";
import "./Banner.css"
import b1 from "../../../../assets/banner/banner1.jpg"
import b2 from "../../../../assets/banner/banner2.avif"
import b3 from "../../../../assets/banner/banner3.avif"
import b4 from "../../../../assets/banner/banner4.avif"

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen bgImg">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md bg-yellow-100 bg-opacity-20 rounded">
                            <h1 className="mb-5 md:text-5xl md:font-bold italic text-amber-500">Welcome To Our Music Instrument Learning Club <br /> <small className="text-yellow-100 font-medium text-2xl not-italic uppercase">In summer vacation</small> </h1>
                            <p className="mb-5 font-bold">A musical instrument is a device created or adapted to make musical sounds.</p>
                        </div>
                    </div>
                </div>
                {/* <img src={b1} className="w-full" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={b4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={b3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={b2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;