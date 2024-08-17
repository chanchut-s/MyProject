import React from 'react'
import axios from 'axios';
import CardPersonnelProfile from '@/app/components/CardPersonnelProfile';
import HeadingPersonnet from '@/app/components/HeadingPersonnet';

const fetchBlog = async (id) => {
    try {
        const response = await axios.get(`http://localhost:1337/api/blog-personnels/${id}?populate=*`);
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
            <HeadingPersonnet text={blog.attributes.NameTH} />
            <div className='flex flex-wrap justify-center py-5'>
                <img
                    className='h-auto w-[15rem] md:h-[22rem] md:w-[15rem] m-5 shadow-xl shadow-blue-gray-900/50 rounded-lg object-cover'
                    src={"http://localhost:1337" + blog.attributes.Image.data?.[0].attributes.url}
                    alt=""
                />
                <div className='w-full md:w-[50rem] my-5 shadow-xl shadow-blue-gray-900/50 rounded-lg'>
                    <CardPersonnelProfile blog={blog} />
                </div>
            </div>
        </div>
    )
}

export default page