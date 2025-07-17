import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-full z-30 bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-3xl font-bold">🌿 FreshFarm</div>
      <div className="space-x-6 text-sm font-medium">
        <button className="hover:underline" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="hover:underline" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className="text-lime-300 hover:underline font-bold" onClick={() => navigate("/")}>
          Logout
        </button>

        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-400 transition duration-100 shadow-md"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-400 transition duration-100 shadow-md"
          onClick={() => navigate("/profile")}
        >
          
          Profile
        </button>
        <button
          className="px-5 py-2 bg-green-600 text-white rounded-sm hover:bg-green-400 transition duration-300 shadow-md"
          onClick={() => navigate("/analytics")}
        >
          Analytics
        </button>
      </div>
    </div>
  );
}
