import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="navbar py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-xl font-semibold text-[#1a1a1a]">
              <NavLink className="bg_active" to="/">
                Home
              </NavLink>
            </li>
            <li className="text-xl font-semibold text-[#1a1a1a]">
              <NavLink className="bg_active" to="/updateProfile">
                Update Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="tex-xl lg:text-3xl font-bold uppercase text-[#1a1a1a]">
          Real Homes
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">
          <li className="text-xl font-semibold text-[#1a1a1a]">
            <NavLink className="bg_active" to="/">
              Home
            </NavLink>
          </li>
          <li className="text-xl font-semibold text-[#1a1a1a]">
            <NavLink className="bg_active" to="/updateProfile">
              Update Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {/* user profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={userImg} />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>User name</a>
            </li>
          </ul>
        </div>
        {/* user profile end */}
        <Link
          to="/login"
          className="btn bg-[#6EC1E4] text-white text-lg font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
