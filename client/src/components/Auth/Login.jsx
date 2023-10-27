import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="h-screen flex justify-center w-full">
      <div className="flex items-center w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mb-10 w-96">
            <div className="flex justify-center">{/* icon */}</div>
            <div className="text-center">
              <h2 className="mt-2 mb-3 text-center font-semibold text-gray-900 text-4xl">
                Login to your Account
              </h2>
              <p className="inline text-sm md:text-base">
                Don't have an account yet?
              </p>
              <Link
                className="text-blue-600 hover:underline px-2"
                to={"/signup "}
              >
                Signup
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <form className="w-full md:w-1/3 bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mv-4 flex flex-col gap-2">
                <label className="text-left block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your username"
                />
                <label className="text-left block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center mt-5">
                <button
                  className="bg-green-500 text-white font-bold  px-4 rounded focus:outline-none focus:shadow-outline hover:text-black py-2"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
