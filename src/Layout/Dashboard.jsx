import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUsers, FaWallet,FaChalkboardTeacher,FaUserTie } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { BiSelectMultiple } from 'react-icons/bi';
import { GrRadialSelected } from 'react-icons/gr';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import img from "../assets/icon.png"


const Dashboard = () => {

    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    // const isInstructor = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#cdc2ae] text-white text-xl font-semibold mb-3">
                    <div>
                        <h1 className="text-3xl font-bold text-red-900 mb-5 text-center">Music Instruments Learning in <br /> <span className='text-xl uppercase text-orange-700'>Summer Vacation Camp</span></h1>
                    </div>
                    {/* Sidebar content here */}
                    {isAdmin ? <>
                        <li><NavLink><FaHome></FaHome> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>Operate Users</NavLink></li>
                        <li><NavLink to="/dashboard/manageclass"><ImBooks></ImBooks>Manage Class</NavLink></li>

                    </> :
                        isInstructor ? <>
                            <li><NavLink><FaHome></FaHome>Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/operateclass"><FaUsers></FaUsers> Add a class</NavLink></li>
                        </> :
                            <>
                                <li><NavLink><BiSelectMultiple></BiSelectMultiple>Selected Class</NavLink></li>
                                <li><NavLink><GrRadialSelected></GrRadialSelected>Enrolled Class</NavLink></li>
                                <li><NavLink><FaWallet></FaWallet> Payment History</NavLink></li>
                                {/* <li>
                            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>

                        </li> */}
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/allinstructors"><FaUserTie></FaUserTie>Instructors</NavLink></li>
                    <li><NavLink to="/allclasses"><FaChalkboardTeacher></FaChalkboardTeacher>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;