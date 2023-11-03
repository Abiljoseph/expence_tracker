import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import AddExpense from "./components/pages/AddExpense";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add_expense" element={<AddExpense></AddExpense>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
