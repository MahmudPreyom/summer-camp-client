import React, { useContext } from "react";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-black"><Link to="/">Home</Link></li>
                        <li className="text-black"><Link to="/allinstructors">Instructors</Link></li>
                        <li className="text-black"><Link to="/allclasses">Classes</Link></li>
                        {user && <li className="text-black"><Link>Dashboard</Link></li>}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-xl font-semibold"><Link to="/">Home</Link></li>
                    <li className="text-xl font-semibold"><Link to="/allinstructors">Instructors</Link></li>
                    <li className="text-xl font-semibold"><Link to="/allclasses">Classes</Link></li>
                    {user && <li className="text-xl font-semibold"><Link to="/dashboard">Dashboard</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div><img className="w-8 mr-2 rounded-full" src={user.photoURL} alt="" /></div> }
                {
                    user ?
                        <><button onClick={handleLogOut} className="btn btn-sm">Log Out</button></> :
                        <><Link to="login" className="btn btn-sm">Login</Link></>
                }


            </div>
        </div>
    );
};

export default Navbar;