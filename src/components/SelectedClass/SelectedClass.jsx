import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SelectedClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { data: myclasscart = [], refetch } = useQuery({
        queryKey: ['myclasscart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myclasscart?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    

    const handleDelete = (item) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            axiosSecure.delete(`/myclasscart/${item._id}`)
            .then(res => {
              console.log("deleted res",res.data);
              refetch();
              Swal.fire(
              'Deleted!',
              'Class has been deleted.',
              'success'
            )
            })
          }
        })
      }



    return (
        <>
            <div>
                <h1 className='text-5xl font-semibold text-red-900 italic mb-8'>Selected Class</h1>
            </div>
            <div className="overflow-x-auto">
                <div><button className="btn btn-warning btn-sm">Pay</button></div>
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
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myclasscart.map((classe, index) => <tr key={index}>
                                <td><img className="w-[50px] h-[50px] rounded" src={classe.classImage} alt="" /></td>
                                <td>{classe.className}</td>
                                <td>{classe.instructorName}</td>
                                <td>{classe.instructorEmail}</td>
                                <td>{classe.availableSeats}</td>
                                <td>${classe.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(classe)} className="btn btn-ghost bg-[#cbb279] rounded-full text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </>
    );
};

export default SelectedClass;