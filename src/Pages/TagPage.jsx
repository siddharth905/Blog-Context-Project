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
        <div>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}
export default TagPage;
