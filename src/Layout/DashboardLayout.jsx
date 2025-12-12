import React from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from '../Component/logo/Logo';
import { IoSchoolOutline } from 'react-icons/io5';
import { PiHandTapLight } from "react-icons/pi";
import UseRole from '../Hooks/Userole/UseRole';
import { MdOutlineRateReview } from "react-icons/md";



const DashboardLayout = () => {
  const {role} = UseRole()
    return (
        <div>
<div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">Scholarship Dashboard for <span className='text-primary'>{role}</span></div>
    </nav>
    {/* Page content here outlet ######################################*/}
    <div >
        <Outlet></Outlet>
    </div>
    
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <NavLink to='/' end className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <IoSchoolOutline className=" -ml-2 inline-block size-8 text-primary is-drawer-open:hidden"/>
            <span className="is-drawer-close:hidden"><Logo></Logo></span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' end className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Dashboard</span>
          </NavLink>
        </li>
        {/* sidebar item is here ****************************************** */}
        {/*################# dashboard sidebar for students############ */}
       {role === 'student' &&
       <>
        <li>
            <NavLink to='/dashboard/my-application' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="my-application">
            <PiHandTapLight className="my-1.5 inline-block size-4"/>
            <span className="is-drawer-close:hidden">My Application</span>
            </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard/my-review' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="my-review">
            <MdOutlineRateReview className="my-1.5 inline-block size-4"/>
            <span className="is-drawer-close:hidden">my-review</span>
            </NavLink>
        </li>
        </>
        
        }
        {/* List item */}
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;