import React from 'react'

const AddExpense = () => {
    
    return (
        <section>
            <div className='h-screen flex justify-center'>
                <div className='flex items-center w-full'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='mb-10'>
                            <div>

                            </div>
                            <div className='text-center'>
                                <h2 className='mt-6 text-4xl font-extrabold text-gray-900 mb-3'>Add Expenses</h2>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <form action="" className='w-full md:w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-slate-300'>
                                <div>
                                    <label className='text-left block text-gray-700 text-sm font-bold my-2' htmlFor="">Expense name</label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="name" placeholder='name of expense' type="text" required />
                                    <label className='text-left block text-gray-700 text-sm font-bold my-2' htmlFor="">Amount Spent</label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="amount" min="0" placeholder='amount' type="number" required />
                                    
                                    <label className='text-left block text-gray-700 text-sm font-bold my-2' htmlFor="">Date of Transaction</label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="transactionDate" type="date" required />
                                    <div className='my-2'>
                                        <label className='text-left text-gray-700 text-sm font-bold' htmlFor="">Category</label>
                                        <br />
                                        <select className='w-1/2 rounded h-8 text-center font-bold mt-2' name="category" id="">
                                            <option name="food">Food</option>
                                            <option name="transportation">Transportation</option>
                                            <option name="entertainment">Entertainment</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <button className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddExpense