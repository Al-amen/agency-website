import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar max-w-screen-2xl container mx-auto bg-white px-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/">Web design</Link>
                  </li>
                  <li>
                    <Link to="/">App development</Link>
                  </li>
                  <li>
                    <Link to="/">Data Science</Link>
                  </li>
                  <li>
                    <Link to="/">Machine Learing</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to="/" className=" font-bold text-xl flex items-center">
          <img src="/logo.png" alt="logo"  />
          <span className="ml-2 text-[#697077] hidden sm:block">WebCode</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link  to="/">Blog</Link>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                <li>
                  <Link to="/">Web design</Link>
                </li>
                <li>
                  <Link to="/">App development</Link>
                </li>
                <li>
                  <Link to="/">Data Science</Link>
                </li>
                <li>
                  <Link  to="/">Machine Learing</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
       <Link to='/login' className="btn btn-outline btn-primary rounded-2xl px-8 hidden  sm:flex">Log In</Link> 
       <Link to="/pricing" className="btn  btn-primary bg-primary rounded-2xl  text-white">Start Free Trial</Link>
       
      </div>
    </div>
  );
};

export default NavBar;
