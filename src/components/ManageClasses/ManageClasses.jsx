import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
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
                        classes.map((classe,index) => <tr key={index}>
                        <td>{classe.className}</td>
                        <td><img className="w-[50px] h-[50px]" src={classe.classImage} alt="" /></td>
                        <td>{classe.instructorName}</td>
                        <td>{classe.instructorEmail}</td>
                        <td>{classe.availableSeats}</td>
                        <td>{classe.price}</td>
                        <th>
                            <button className="btn btn-outline btn-accent btn-xs">{classe.status}</button>
                        </th>
                    </tr>)
                        }
                    
                </tbody>

            </table>
        </div>
    );
};

export default ManageClasses;