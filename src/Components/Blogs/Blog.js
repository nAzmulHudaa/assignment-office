import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = () => {
    const [blog,setBlog] = useState([]);
    const [visible,setVisible] =useState(10);
     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>{
            setBlog(data);
            //console.log(data);
        })
    })
    const showMoreBlogs = () =>{
        setVisible((previousValue) => previousValue + 10)
    }
  
  
    return (
        <section className='mt-3 mb-5 font'>
            <h1 className='heading'>Blogs</h1>
            <div className="blog-section container">
                {
                    blog.slice(0,visible).map(blog=>{
                       return (
                            <div className='blog-card'>
                                <p>{blog.id}</p>
                                <h2>{blog.title}</h2>
                                <h5>{blog.body}</h5>
                            </div>
                       )
                           
                    })
                }
            </div>
            <button className='headerBtn' onClick={showMoreBlogs}>Load More</button>
        </section>
    );
};

export default Blog;