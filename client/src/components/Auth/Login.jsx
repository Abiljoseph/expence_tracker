import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="h-screen justify-center w-full grid md:grid-cols-2  bg-blue-900">
        <div className="justify-center items-center hidden md:flex flex-col">
          <div>
            <h1
              style={{ fontFamily: "cursive" }}
              className="text-6xl font text-white font-bold"
            >
              Expense Tracker
            </h1>
            <p className="my-4 font-medium text-end text-slate-300">
              - <span>No one</span> will care about your money more than you
            </p>
          </div>
          <img
            width={"400px"}
            src="https://i.postimg.cc/L5ttXF89/vecteezy-dollar-money-bag-with-coins-and-papers-15275954-996.png"
          />
        </div>
        <div className="flex items-center w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="mb-10 w-96">
              <div className="flex justify-center">{/* icon */}</div>
              <div className="text-center">
                <h2
                  style={{ fontFamily: "unset" }}
                  className="mt-2 mb-3 text-center font-semibold text-4xl text-white"
                >
                  Login to your Account
                </h2>
                <p className="inline text-sm md:text-base text-slate-300">
                  Don't have an account yet?
                </p>
                <Link
                  className="text-green-600 hover:underline px-2"
                  to={"/signup "}
                >
                  Signup
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <form className="w-full md:w-3/4  px-8 pt-6 pb-8 mb-4">
                <div className="mv-4 flex flex-col gap-2">
                  <label className="text-left block text-white text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border p-3 rounded-lg"
                    placeholder="Enter your Email"
                  />
                  <label className="text-left block text-white text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border p-3 rounded-lg"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    className="bg-green-700 w-full text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-75"
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
    </>
  );
}

export default Login;
