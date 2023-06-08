import React from "react";
import g1 from "../../../assets/gallary/g1.jpg"
import g2 from "../../../assets/gallary/g2.jpg"
import g3 from "../../../assets/gallary/g3.jpg"
import g4 from "../../../assets/gallary/g4.jpg"
import g5 from "../../../assets/gallary/g5.jpg"
import g6 from "../../../assets/gallary/g6.jpg"
import g7 from "../../../assets/gallary/g7.jpg"
import g8 from "../../../assets/gallary/g8.jpg"
import g9 from "../../../assets/gallary/g9.jpg"

import "./Gallery.css"

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: g1,
        },
        {
            id: 2,
            imgSrc: g6,
        },
        {
            id: 3,
            imgSrc: g3,
        },
        {
            id: 4,
            imgSrc: g4,
        },
        {
            id: 5,
            imgSrc: g7,
        },
        {
            id: 6,
            imgSrc: g2,
        },
        {
            id: 7,
            imgSrc: g9,
        },
        {
            id: 8,
            imgSrc: g8,
        },
        {
            id: 9,
            imgSrc: g5,
        }
    ]

    return (
        <div>
            <h3 className="text-center font-bold text-4xl mb-2 mt-24 text-yellow-800 mb-8">Music Instruments Arts Gallery</h3>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;