import Image from 'next/image';
import React, { useState } from 'react';
import assigneesImage from "@/content/images/user_1.jpg"
import Progress from '@/components/ProgressBar/Progress';
import FilterFooter from '@/components/FilterFooter/FilterFooter';
import { FaArrowDown, FaEdit } from 'react-icons/fa'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AllToDo from '@/components/AllToDo/AllToDo';

const TodoTable = () => {

    const todos = useSelector((state) => state.todos)
    const todoProgress1 = 38; // Example progress value for Todo 1
    const todoProgress2 = 75; // Example progress value for Todo 2


    return (


        <div className="max-w-7xl m-auto py-4">
            {/* <div className='bg-slate-700 py-2 text-center border-b-2 border-gray-200 text-xl text-white'>Today Todo</div> */}
            <table className="w-full  rounded-md overflow-hidden mb-4">
                <thead className='font-semibold'>
                    <tr className='bg-slate-700 text-purple-100 rounded-tl-md rounded-tr-md'>
                        <th className="py-2 px-4 border-r-gray-200 border-r-2 ">Todo Title</th>
                        <th className="py-2 px-4 border-r-gray-200 border-r-2 ">Start Date</th>
                        <th className="py-2 px-4 border-r-gray-200 border-r-2">Status</th>
                        <th className="py-2 px-4 border-r-gray-200 border-r-2">Assignees</th>
                        <th className="py-2 px-4 border-r-gray-200 border-r-2">Progress</th>
                        <th className='py-2 px-4 border-gray-200 border-r-2'>
                            Edit
                        </th>
                    </tr>
                </thead>
                {/* <button className=' outline-none border-none py-3 text-2xl text-slate-700 font-medium  w-full flex justify-start items-center'>
                    <span className='mr-2'><FaArrowDown></FaArrowDown></span>
                    <span>Todays Todo</span>
                </button> */}
                <tbody className=''>
                    {
                        todos.map((todo, i) => (
                            <AllToDo key={i} todo={todo} />
                        ))
                    }
                </tbody>
                {/* Prev. Week todoss */}
                {/* <button className=' outline-none border-none py-3 text-2xl text-slate-700 font-medium  w-full flex justify-start items-center'>
                    <span className='mr-2'><FaArrowDown></FaArrowDown></span>
                    <span>Prev Week Todo</span>
                </button> */}
                {/* <tbody className=''>
                    <tr className="hover:bg-slate-100 hover:cursor-pointer hover:transition-all duration-500 border-2  font-medium text-slate-800    ">
                        <td className="px-4">
                            <div className="flex items-center">
                                <div className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2`}>
                                    <input
                                        type="checkbox"
                                        className="opacity-0 absolute rounded-full"
                                    // onChange={() => handleStatusChanged(id)}
                                    />
                                    <svg
                                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </div>
                                <div className={`select-none`}>{"Learn redux and redux toolkit"}</div>
                            </div>
                        </td>
                        <td className='px-4 text-center'>02-12-2023</td>
                        <td className='px-4 text-center'>Hold</td>
                        <td className='px-4'>
                            <div className="flex items-center justify-center">
                                <Image src={assigneesImage} width={40} height={40} alt="" srcset="" priority={true} className='rounded-full ' />
                            </div>
                        </td>
                        <td className=" px-4">
                            <Progress />
                        </td>
                        <td className='px-4 '>
                            <span className='flex items-center justify-center text-yellow-600 text-xl'>
                                <Link href={"/edit"}><FaEdit></FaEdit></Link>
                            </span>
                        </td>
                    </tr>
                </tbody> */}
            </table>

            <FilterFooter />
        </div>

    );
};

export default TodoTable;
