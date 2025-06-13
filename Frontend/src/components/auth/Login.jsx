import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user";
import { USER_API_ENDPOINT } from "../../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        { email, password },
        { withCredentials: true }
      );

      if (response.data.success) {
        console.log(response.data);
        toast.success(response.data.message);
        dispatch(setUser(response.data.loggedInUser));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-50 to-slate-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full transition-transform hover:scale-[1.02]"
          >
            Login
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Don't have an account?{" "}
            <span className="text-primary font-medium cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
