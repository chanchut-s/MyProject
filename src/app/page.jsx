import React from 'react'
import CardNews from './components/CardNews';
import axios from 'axios'
import { CarouselCustomNavigation } from './components/Carousel';

const fetchBlogs = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/blogs/?populate=thumbnail');
    return response.data.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const fetch2Blogs = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/relatnew?populate=blog_news.thumbnail');
    return response.data.data.attributes.blog_news.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export default async function Home() {
  const blogs = await fetchBlogs();
  const haedBlogs = await fetch2Blogs();
  //รับวันที่ใหม่สุดก่อน
  const sortedData = blogs.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)); 
  return (
    <div className=' bg-gray-300'>
      <CarouselCustomNavigation blognews={haedBlogs} />
      <div>
        <h4 className='pt-4 pl-4'>ข่าวสาร</h4>
      </div>
      <div className='pt-4 pb-10 mx-8 grid justfy-center grid-cols-3 gap-8' >
        {sortedData.slice(0, 3).map((blog, index) => (
          <CardNews key={index} blog={blog}>
          </CardNews>
        ))}
        
      </div>
    </div>
  )
}