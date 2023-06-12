import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GrDocumentUpdate } from 'react-icons/gr';
import { Link } from "react-router-dom";


const MyClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const classesStatus = classes.filter(classe => classe.instructorEmail === user.email);

    return (
        <div>
                
                <div className="overflow-x-auto">
                <table className="table rounded">
                  {/* head */}
                  <thead className='bg-[#cdc2ae] text-black'>
                    <tr>
                      <th>Class Image</th>
                      <th>Class Name </th>
                      <th>Available Seats</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {classesStatus.map((item,index) =>
                    <tr key={index}>
                      <th>
                        <img className="w-[50px] h-[50px] rounded" src={item.classImage} alt="" />
                      </th>
                      <td className="font-bold"> 
                        {item.className}
                      </td>
                      <td>
                        {item.availableSeats}
                      </td>
                      <td className="uppercase font-bold text-green-700">{item.status}</td>
                      <th>
                      <Link className="btn btn-ghost btn-sm bg-[#cbb279] rounded-full  text-white"><GrDocumentUpdate></GrDocumentUpdate>Update</Link>
                      </th>
                    </tr>)}

                  </tbody>
                  
                </table>
              </div>
        </div>
    );
};

export default MyClass;