import React, { useEffect, useState } from "react";

const PopularClass = () => {
    const [poplarClass, setPopularClass] = useState([])
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const popularClassSec = data.filter(item => item.class_category === 'popular')
                setPopularClass(popularClassSec)
            })
    }, [])
    return (
        <>
            <h3 className="text-center font-bold text-4xl mt-24 text-yellow-800 mb-10">Popular Class</h3>
            <div className="grid md:grid-cols-3 md:ml-10 gap-5">
                {
                    poplarClass.map((item, index) => 
                        <div className="card md:w-72 w-full bg-base-100 shadow-xl" key={index}>
                            <figure><img className="h-[300px] w-full" src={item.class_pic} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.class_name}
                                    <div className="badge badge-secondary">{item.class_category}</div>
                                </h2>
                                <p>Price: $ {item.price}</p>
                                <p>Total Students: {item.total_students}</p>
                                <p>Available Seats: {item.available_seats}</p>
                                <div className="card-actions justify-end">

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default PopularClass;