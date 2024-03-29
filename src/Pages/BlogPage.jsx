import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';

export const BlogPage = () => {
   const newBaseUrl="https://codehelp-apis.vercel.app/api/";
   const[blog,setBlog]=useState(null);
   const[relatedblogs,setRelatedBlogs]=useState([]);
   const{setLoading,loading}=useContext(AppContext);
 
    const location=useLocation();
    const navigation=useNavigate();
  const blogId=location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res= await fetch(url);
      const data=await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Error aagya in blog id wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }
  useEffect(() =>{
      if(blogId){
        
        fetchRelatedBlogs();
        console.log("API CALL");
        
      }
  },[location.pathname]);

  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={()=> navigation(-1)}>
          Back
        </button>
      </div>
      {
        loading ?
        (
          <div>
            <p>Loading</p>
          </div>
        ):
        blog ?
        (
          <div>
            <BlogCard post={blog}></BlogCard>
            <h2 className='w-11/12 max-w-2xl mx-auto mt-4 font-bold'>Related Blogs...</h2>
            {
              relatedblogs.map((post)=>(
                <div key={post.id}>
                <BlogCard post={post}></BlogCard>
                </div>))  
            }
           
          </div>
        ):
        (<div>
          <p>No Blog Found</p>
        </div>)
      }
      <Pagination></Pagination>
    </div>
  )
}
export default BlogPage;
