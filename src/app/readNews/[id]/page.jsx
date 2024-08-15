import React from 'react'
import axios from 'axios'
import Heading from '@/app/components/Heading';
import markdownToHtml from '@/app/lib/markdownToHtml';
import BottonDownload from '@/app/components/bottons/BottonDownload';

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
  const content = await markdownToHtml(blog.attributes.content)
  const files = blog.attributes.file.data || [];

  return (
    <div className='bg-gray-300'>
      <Heading text={blog.attributes.title} />
      <div className='flex justify-center pt-10'>
        <img
          src={"http://localhost:1337" + blog.attributes.thumbnail.data?.[0].attributes.url}
          className='h-[30rem]'
        />
      </div>
      <div className='p-10 indent-8' dangerouslySetInnerHTML={{ __html: content }} />
      {/* <p className='p-10 indent-8'>{blog.attributes.content}</p> */}

      <div className='grid gap-4 pl-10 pb-5'>
        {files.map((blog, index) => (
        <div key={index} className='flex'>
          <BottonDownload blog={blog} />
        </div>
      ))}
      </div>
      

    </div>
  )
}

export default page