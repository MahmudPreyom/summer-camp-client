import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })

  const handleMakeAdmin = user => {
    fetch(`https://summer-vacation-server-mahmudpreyom.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  const handleMakeInstructor = user => {
    fetch(`https://summer-vacation-server-mahmudpreyom.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an instructor Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleDelete = user => {
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
        
        axiosSecure.delete(`/users/${user._id}`)
        .then(res => {
          console.log("deleted res",res.data);
          refetch();
          Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
        })
      }
    })
  }

  return (
    <>
      <div>
        <h1 className='text-5xl font-semibold text-red-900 italic mb-8'>Operate All User</h1>
      </div>
      <div className="overflow-x-auto w-full border">
        <table className="table ">
          {/* head */}
          <thead className='bg-[#cdc2ae] text-black'>
            <tr>
              <th>#</th>
              <th className='font-bold'>Name</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, index) => <tr
                key={index}
              >
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? 'admin' :
                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#cbb279]  rounded-full text-white"  ><FaUserShield></FaUserShield></button>

                  }

                </td>
                <td>
                  {user.role === 'instructor' ? 'instructor' :
                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-[#cbb279] rounded-full  text-white"
                    ><FaUserShield></FaUserShield></button>
                  }

                </td>
                
                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-[#cbb279] rounded-full text-red-600"><FaTrashAlt></FaTrashAlt></button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;