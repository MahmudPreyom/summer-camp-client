import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
// import Swal from "sweetalert2";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleApproved = (classe) => {
        let updateData = null;

        if (classe.status === 'pending') {
            updateData = {
                status: 'approved'
            }
        }
        if (classe.status === 'approved') {
            updateData = {
                status: 'denied'
            }
        }
        fetch(`http://localhost:5000/classes/${classe._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
                // if (data.modifiedCount) {
                //     refetch();
                //     Swal.fire({
                //         position: 'top-end',
                //         icon: 'success',
                //         title: `${classes.id} is an Admin Now!`,
                //         showConfirmButton: false,
                //         timer: 1500
                //     })
                // }
            })
    }

    return (
        <>
            <div>
                <h1 className='text-5xl font-semibold text-red-900 italic mb-8'>Class Management</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#cdc2ae] text-black'>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((classe, index) => <tr key={index}>
                                <td><img className="w-[50px] h-[50px]" src={classe.classImage} alt="" /></td>
                                <td>{classe.className}</td>
                                <td>{classe.instructorName}</td>
                                <td>{classe.instructorEmail}</td>
                                <td>{classe.availableSeats}</td>
                                <td>{classe.price}</td>
                                <th>
                                    <button onClick={() => handleApproved(classe)} className="btn btn-outline btn-accent btn-xs">{classe.status}</button>

                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </>
    );
};

export default ManageClasses;