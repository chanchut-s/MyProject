import React from 'react'
import Reward from './components/Reward';
import CardNews from './components/CardNews';
import axios from 'axios'
import { CarouselCustomNavigation } from './components/Carousel';
import Botton from './components/bottons/Botton';
const fetchBlogs = async () => {
  try {
    const [newResponse, pinnewsResponse, rewardResponse] = await Promise.all([
      axios.get('http://localhost:1337/api/blogs/?populate=*'),
      axios.get('http://localhost:1337/api/relatnew?populate=blog_news.thumbnail'),
      axios.get('http://localhost:1337/api/reward/?populate=rewards.image')
    ]);

    const news = newResponse?.data?.data || [];
    const pinNews = pinnewsResponse?.data?.data?.attributes?.blog_news?.data || [];
    const rewards = rewardResponse?.data?.data?.attributes?.rewards?.data || [];


    return {
      news, pinNews, rewards
    };
  } catch (error) {
    console.log("Error fetching personnel data:", error);
    return {
      news: [],
      pinNews: [],
      rewards: []
    };
  }
};


export default async function Home() {
  const { news, pinNews, rewards } = await fetchBlogs();
  const sortedData = news.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));
  return (
    <div className=' bg-gray-300'>
      <CarouselCustomNavigation blognews={pinNews} />
      <div className="flex justify-around items-center min-h-screen bg-gray-100 ">
        <h1 className='text-4xl text-blue-900 text-center'>ผลงานและงานวิจัย</h1>
        <div className="w-[47rem]">
          <Reward blogs={rewards} />
        </div>
      </div>
      <div className='flex justify-between p-4'>
        <h1 className='text-4xl text-blue-900'>ข่าวสารและกิจกรรม</h1>
        <Botton />
      </div>
      <div className='pb-10 mx-8 grid justfy-center grid-cols-3 gap-8' >
        {sortedData.slice(0, 3).map((blog, index) => (
          <CardNews key={index} blog={blog}>
          </CardNews>
        ))}

      </div>
    </div>
  )
}

