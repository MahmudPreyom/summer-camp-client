import React, { useEffect, useState } from "react";
import img from "../../assets/class/col.jpg"
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';

const AllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const approvedClasses = classes.filter(classe => classe.status === 'approved');
    return (
        <>
            <Helmet>
                <title>MI Learning | Classes</title>
            </Helmet>
            <img className="w-full h-[500px]" src={img} alt="" />
            <h3 className="text-center font-bold text-4xl mt-24 text-yellow-800 mb-10">All Classes</h3>
            <div className="grid md:grid-cols-3 md:ml-10 gap-5 mb-10">
                {
                    approvedClasses.map((item, index) =>
                        <div className="card card-compact md:w-72 w-full bg-base-100 shadow-xl" key={index}>
                            <figure><img className="h-[300px] md:w-full" src={item.classImage} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.className}</h2>
                                <p className="font-bold">Instructor: {item.instructorName}</p>
                                <p>Available Seats: {item.availableSeats}</p>
                                <p className="font-bold text-orange-500">Price:$ {item.price}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary btn-sm">Add Cart</button>
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