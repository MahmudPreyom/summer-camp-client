import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


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
                <ul className="menu p-4 w-80 h-full bg-[#cdc2ae] text-white text-xl font-semibold">
                    {/* Sidebar content here */}
                    {isAdmin ? <>
                        <li><NavLink><FaHome></FaHome> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>Operate Users</NavLink></li>
                        <li><NavLink to="/dashboard/operateclass"><ImBooks></ImBooks>Update Classes</NavLink></li>

                    </> :
                        isInstructor ? <>
                            <li><NavLink><FaHome></FaHome>Instructor Home</NavLink></li>
                            <li><NavLink><FaUsers></FaUsers> Add a class</NavLink></li>
                        </> :
                            <>
                                <li><NavLink><FaHome></FaHome>Students Home</NavLink></li>
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
                    <li><NavLink to="/instructors">Instructors</NavLink></li>
                    <li><NavLink to="/classe">Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;