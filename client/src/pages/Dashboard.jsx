import React from "react";
import Charts from "../components/Charts";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import BarChart from "../components/Charts";
import Canva from "./CanvaChart";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col items-start basis-1/5 bg-slate-400 justify-center h-screen gap-3">
          <div className="text-white flex flex-row justify-center gap-3 font-semibold text-2xl items-center">
            <FaRupeeSign /> Balance - 25000
          </div>
          <div className="text-white flex flex-row justify-center gap-3 font-semibold text-2xl items-center">
            <FaRupeeSign /> Expense - 15000
          </div>
          <Link
            to={"/add_expense"}
            className="uppercase bg-green-600 text-white rounded-lg w-3/4 md:h-12 m-3 p-3"
          >
            <h2 className="text-center">add new expense</h2>
          </Link>
        </div>
        <div className="basis-4/5 flex flex-col">
          <div>
            {/* <Charts /> */}
            <Canva />
          </div>
          <div>
            <h2 className="p-3 text-lg font-semibold">Recent transactions</h2>
            <div className="w-full">
              <table className="w-full">
                <tr className="m">
                  <th>Date</th>
                  <th>Category</th>
                  <th>Expence</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
                <tr className="">
                  <td className="p-3 border text-center gap-3">10-20-2022</td>
                  <td className="p-3 border text-center gap-3">Maria Anders</td>
                  <td className="p-3 border text-center gap-3">Germany</td>
                  <td className="p-3 border text-center gap-3">Germany</td>
                  <td className="flex justify-around border p-3">
                    <Link>
                      <FiEdit className="text-yellow-500 hover:opacity-60" />
                    </Link>
                    <Link>
                      <MdDelete className="text-red-600 hover:opacity-60" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border text-center gap-3">10-20-2022</td>
                  <td className="p-3 border text-center gap-3">Maria Anders</td>
                  <td className="p-3 border text-center gap-3">Germany</td>
                  <td className="p-3 border text-center gap-3">Germany</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="p-3 border text-center gap-3">10-20-2022</td>
                  <td className="p-3 border text-center gap-3">Maria Anders</td>
                  <td className="p-3 border text-center gap-3">Germany</td>
                  <td className="p-3 border text-center gap-3">Germany</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
