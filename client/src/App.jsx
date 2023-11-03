import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import AddExpense from "./pages/AddExpense";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add_expense" element={<AddExpense />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}
