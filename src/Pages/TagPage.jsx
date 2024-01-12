import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

export const TagPage = () => {
    const navigate=useNavigate();
    const location =useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div>
        <Header></Header>
        <div className='w-11/12 max-w-2xl mx-auto mt-[70px] '>
            <button onClick={() => navigate(-1)} className='block border rounded-md shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-indigo-500 hover:bg-indigo-700 text-white border-transparent focus:border-indigo-300 focus:ring-indigo-200'>
                Back
            </button>
            <h2>
                Blogs Tagged <span className='text-xs font-semibold underline text-blue-700 cursor-pointer'>
                #{tag}
                </span>
            </h2>
        </div>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}
export default TagPage;
