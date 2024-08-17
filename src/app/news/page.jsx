'use client';

import React, { useState, useEffect, useRef } from 'react';
import CardNews from '../components/CardNews';
import Heading from '../components/Heading';
import { DefaultPagination } from '../components/Pagination';
import axios from 'axios';
import './CustomGridLayout.css';


const fetchBlogs = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/blogs/?populate=thumbnail');
    return response.data.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const News = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const containerRef = useRef(null);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsData = await fetchBlogs();
      const sortedData = blogsData.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));
      setBlogs(sortedData);
    };
    getBlogs();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='bg-gray-300'>
      <Heading text={"ข่าวสาร"} />
      <div className='p-5'>
        <h4 className='text-4xl text-blue-900'>ข่าวสารและกิจกรรมทั้งหมด</h4>
        <div ref={containerRef} className='custom-grid-layout'>
          {currentBlogs.map((blog, index) => (
            <CardNews key={index} blog={blog} />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center p-5">
          <DefaultPagination
            active={currentPage}
            setActive={handlePageChange}
            totalPages={Math.ceil(blogs.length / blogsPerPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
