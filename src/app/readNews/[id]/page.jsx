import React from 'react'
import axios from 'axios'
import Heading from '@/app/components/Heading';

const fetchBlog = async (id) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/blogs/${id}?populate=thumbnail`);
    return response.data.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

async function page({ params }) {
  const blog = await fetchBlog(params.id);
  return (
    <div className='bg-gray-300'>
      <Heading text={blog.attributes.title} />
      <h1>{blog.attributes.title}</h1>
      <div className='flex justify-center'>
        <img
          src={"http://localhost:1337" + blog.attributes.thumbnail.data?.[0].attributes.url}
          className='h-[40rem]'
        />
      </div>
      <p>{blog.attributes.detail}</p>

    </div>
  )
}

export default page