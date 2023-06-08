import React, { useContext } from "react";
import img from "../../assets/icon.png"
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email,password);
    //     signIn(email,password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    // }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <img src={img} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center"><small>New Here? <Link className="text-blue-600" to="/signup"> Create an Account</Link> </small></p>
                </div>
            </div>
        </div>

    );
};

export default Login;