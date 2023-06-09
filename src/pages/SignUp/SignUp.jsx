import React, { useContext, useRef } from "react";
import img from "../../assets/icon.png"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async"

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const password = useRef({});
    // password.current = watch("password", "")
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    };



    return (
        <><Helmet>
            <title>MI Learning | Sign Up</title>
        </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Sign Up Now!</h1>
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="your email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password is must be 6 Characters</span>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lower case, one special character</p>}
                            </div>
                            {/* main */}
                            <div className="form-control">
                                {/* <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" ref={...register("confirm",{ required: true })} name="confirm" placeholder="confirm password" className="input input-bordered" />
                            {errors.confirm?.type === "password" && <span className="text-red-600">Confirm Password is required</span>} */}


                                {/* trial todo */}

                                {/* <input type="password" ref={...register({
                                validate: value => value === password.current || "The Password do not match"
                            })} name="confirm" placeholder="confirm password" className="input input-bordered" />
                            {errors.confirm  && <span className="text-red-600">{errors.confirm.message}</span>} */}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center"><small>Already Have an Account? <Link className="text-blue-600" to="/login"> Continue to login</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;