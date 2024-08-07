import React from 'react'
import axios from 'axios'
import CardPersonnel from '../components/CardPersonnel';
import Heading from '../components/Heading';

const fetchBlogs = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/personnel?populate=blog_personnels.blogEducation&populate=blog_personnels.Image');
    return response.data.data.attributes.blog_personnels.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

async function page() {
  const blogs = await fetchBlogs();
  return (
    <div className='bg-gray-300'>
      <Heading text={"บุคลากร"}/>
      <div className='flex grid-cols-3 gap-28 justify-center py-20'>
        {blogs.map((blog, index) => (
        <CardPersonnel key={index} blogPersonnal={blog} />
      ))}
      </div>
    </div>
  )
}

export default page