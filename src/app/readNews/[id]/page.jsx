import React from 'react'
import axios from 'axios'
import Heading from '@/app/components/Heading';
import CardNews from '@/app/components/CardNews';

const fetchBlog = async (id) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/blogs/${id}?populate=*`);
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
      <div className='flex justify-center pt-10'>
        <img
          src={"http://localhost:1337" + blog.attributes.thumbnail.data?.[0].attributes.url}
          className='h-[30rem]'
        />
      </div>
      <p className='p-10 indent-8'>{blog.attributes.content}</p>
    </div>
  )
}

export default page