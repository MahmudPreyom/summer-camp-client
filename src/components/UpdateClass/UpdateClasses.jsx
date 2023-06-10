import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateClasses = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = (data) => {
      const classData = { ...data, status: "pending" };
      console.log(classData)
      fetch("http://localhost:5000/classes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(classData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          reset();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ffefd6]">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered"
                  {...register("className", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Image"
                  className="input input-bordered"
                  {...register("classImage", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  placeholder="Instructor Name"
                  className="input input-bordered"
                  readOnly
                  {...register("instructorName", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  placeholder="Instructor Email"
                  className="input input-bordered"
                  readOnly
                  {...register("instructorEmail", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Seats"
                  className="input input-bordered"
                  {...register("availableSeats", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  {...register("price", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary btn-outline">
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default UpdateClasses;