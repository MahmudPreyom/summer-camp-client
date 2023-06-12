import React, { useEffect, useState } from "react";
import img from "../../assets/class/col.jpg"
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const AllClasses = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const approvedClasses = classes.filter(classe => classe.status === 'approved');

    const addMyClasses = (item) => {
        console.log(item);
        const addItem = { itemId: item._id, className: item.className, price: item.price, email:user.email, instructorName:item.instructorName, instructorEmail: item.instructorEmail, availableSeats: item.availableSeats, price: item.price, classImage: item.classImage }
        fetch(`https://summer-vacation-server-mahmudpreyom.vercel.app/myclasscart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.insertedId){
                //   console.log(data);
                // }
            })
        const updateData = {
            availableSeats: parseInt(item.availableSeats) - 1
        }
        fetch(`https://summer-vacation-server-mahmudpreyom.vercel.app/myclasscart/${item._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
                // if (data.modifiedCount) {
                //   refetch();
                //   Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: ${user.name} is an apr Now!,
                //     showConfirmButton: false,
                //     timer: 1500
                //   })
                // }
            })

    }

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
                                    <button disabled={ isAdmin || isInstructor|| (parseInt(item.availableSeats) < 1) ? true : false} onClick={() => addMyClasses(item)} className="btn btn-primary btn-sm">
                                        Add Classes
                                    </button>
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