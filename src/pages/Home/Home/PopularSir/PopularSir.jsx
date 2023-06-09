import React, { useEffect, useState } from "react";

const PopularClass = () => {
    const [poplarSir, setPopularSir] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const popularSir = data.filter(item => item.instructor_demand === 'Popular')
                setPopularSir(popularSir)
            })
    }, [])
    return (
        <>
            <h3 className="text-center font-bold text-4xl mt-24 text-yellow-800 mb-10">Popular Instructor</h3>
            <div className="grid md:grid-cols-3 md:ml-10 gap-5">
                {
                    poplarSir.map((item, index) => 
                        <div className="card md:w-72 w-full bg-base-100 shadow-xl" key={index}>
                            <figure><img className="h-[300px] md:w-full" src={item.instructor_pic} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.instructor_name}
                                    <div className="badge badge-secondary">{item.instructor_demand}</div>
                                </h2>
                                <p className="text-xl font-bold">Popular For: {item.class_name}</p>
                                <p>Students: {item.students}</p>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default PopularClass;