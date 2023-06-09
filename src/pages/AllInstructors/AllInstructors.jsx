import React, { useEffect, useState } from "react";
import img from "../../assets/instructor/img.png"

const AllInstructors = () => {
    const [allSir, setAllSir] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllSir(data)
            })
    }, [])
    return (
        <div>
            <img className="w-full h-[500px]" src={img} alt="" />
            <h3 className="text-center font-bold text-4xl mt-24 text-yellow-800 mb-10">All Instructors</h3>
            {
                allSir.map((item, index) =>
                    
                        <div className="card lg:card-side bg-slate-300 shadow-xl mb-8 md:w-3/4 w-full md:mx-auto" key={index}>
                            <figure><img className="h-[350px] w-[400px]" src={item.instructor_pic} alt="Album" /></figure>
                            <div className="card-body mt-16 md:items-center">
                                <h2 className="card-title">Name: <span className="md:text-xl md:font-bold">{item.instructor_name}</span></h2>
                                <p className="md:text-xl md:font-semibold">Email: {item.instructor_email}</p>
                            </div>
                        </div>
                    
                )
            }
        </div>
    );
};

export default AllInstructors;