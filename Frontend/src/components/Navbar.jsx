import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";
import { USER_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import axios from "axios";
import { setUser } from "../redux/user";

function Navbar() {
  const user = useSelector((store) => store.User.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = async ()=>{
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(null));
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="navbar bg-base-100 shadow-sm pr-[20px]">
      {/* Navbar Start: Hamburger Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Center: Logo */}
      <div className="navbar-center">
        <NavLink to="/" className="text-2xl font-bold">
          Wearzy
        </NavLink>
      </div>

      {/* Navbar End: Cart and Profile */}
      <div className="navbar-end">
        {/* Cart */}
        {user?.role == "user" && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {user?.orders?.length || 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-10 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {user?.orders?.length || 0} Items
                </span>
                <div className="card-actions">
                  <button
                    onClick={() => navigate("/orders")}
                    className="btn btn-primary btn-block"
                  >
                    View Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {user?.role == "admin" && (
          <div onClick={()=>navigate("/admin")} tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdAdminPanelSettings size={28} />
            </div>
          </div>
        )}

        {/* Profile Avatar */}
        <div className="dropdown dropdown-end ml-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <FaRegUser size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {!user ? (
              <li>
                <NavLink to="/">Wearzy Home</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/profile">{user?.fullname}</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            {!user ? (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            ) : (
              <li>
                <button onClick={handlelogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
