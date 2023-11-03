import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({
    // email: "",
    // password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === undefined || formData.password === undefined) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      console.log(formData.email, formData.password);
      navigate("/");
    }
  };

  return (
    <>
      <section className="h-screen justify-center w-full grid md:grid-cols-2  bg-blue-950">
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
            alt="image"
            className="text-white"
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
              <form
                onSubmit={handleSubmit}
                className="w-full md:w-3/4  px-8 pt-6 pb-8 mb-4"
              >
                <div className="mv-4 flex flex-col gap-2">
                  <label className="text-left block text-white text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border p-3 rounded-lg"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                  />
                  <label className="text-left block text-white text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border p-3 rounded-lg"
                    placeholder="Enter your password"
                    onChange={handleChange}
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
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default Login;
