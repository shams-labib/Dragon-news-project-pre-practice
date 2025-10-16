import React, { use } from 'react';
 // ✅ এটা ঠিক করো, 'react-router' না, 'react-router-dom' হবে
import UserImg from '../assets/user.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Firebase/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Navber = () => {

  const {user, signOutIn} = use(AuthContext);

 const handleSignOut = ()=>{
  signOutIn().then(reuslt =>{
     console.log(reuslt);
     toast.success("Sign Out Success")
  })
 }

  return (
    <div className="flex justify-between items-center px-10 py-4">
      {/* Left side (logo optional) */}
       <div className="flex items-center gap-3">
        <img
          src={UserImg}
          alt="User"
          className="w-7 h-7 rounded-full border border-gray-300"
        />
        {
          user && <p className='text-xl font-semibold'>{user.email}</p>
        }
      </div>

      {/* Center side (nav links) */}
      <div className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
          }
        >
          Career
        </NavLink>
      </div>

      {/* Right side (user image + login button) */}
      <div className="flex items-center gap-3">
        <img
          src={UserImg}
          alt="User"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
        {
          user ? <Link onClick={handleSignOut} to={"/"} className="bg-gray-700 text-semibold text-white px-7 py-2 rounded-md  hover:bg-blue-700 cursor-pointer">
          Sign Out
        </Link> : <Link to={"/login"} className="bg-gray-700 text-semibold text-white px-7 py-2 rounded-md  hover:bg-blue-700 cursor-pointer">
          Login
        </Link>
        }
      </div>
    </div>
  );
};

export default Navber;
