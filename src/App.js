import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams,setsearchParams]= useSearchParams();
  const location =useLocation();

  useEffect(() => {
    
     const page= searchParams.get("page") ?? 1;
     if(location.pathname.includes("tag")){
      //iska matlab tag wala page show krna h

      const tag= location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
     }
     else if(location.pathname.includes("categories")){
        const category= location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),category);
     }
     else{
      fetchBlogPosts(Number(page));
     }

  }, [location.pathname,location.searchParams]);

  return (
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
    <Route path="/tag/:tag" element={<TagPage/>}></Route>
    <Route path="/categories/:category" element={<CategoryPage/>}></Route>
   </Routes>

   
  );
}
