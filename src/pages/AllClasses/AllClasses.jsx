import React, { useEffect, useState } from "react";
import img from "../../assets/class/col.jpg"

const AllClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllClasses(data);
            })
    }, [])
    return (
        <>
            <img className="w-full h-[500px]" src={img} alt="" />
            <h3 className="text-center font-bold text-4xl mt-24 text-yellow-800 mb-10">All Classes</h3>
            <div className="grid md:grid-cols-3 md:ml-10 gap-5">
            {
                allClasses.map((item, index) => 
                    <div className="card card-compact w-72 bg-base-100 shadow-xl" key={index}>
                        <figure><img className="h-[300px] md:w-full" src={item.class_pic} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    );
};

export default AllClasses;