import React from 'react'
import { NavLink } from 'react-router-dom';

export const BlogCard = ({post}) => {
  return (
    <div className='mt-[50px]'>
    <p>
       <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
       </NavLink></p>

            <p className="text-sm my-1">
              By <span className="italic">{post.author}</span> on{" "}
              
              <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
              </NavLink>

            </p>
            <p >Posted On {post.date}</p>
            <p >{post.content}</p>
            <div>
              {post.tags.map((tag, index) => (
                <NavLink
                  key={index}
                  to={`/tag/${tag.replaceAll(" ","-")}`}>
                  <span>{`#${tag}`}</span>
                  </NavLink>
              ))}
            </div>
        
    </div>
  )
}
export default BlogCard;
