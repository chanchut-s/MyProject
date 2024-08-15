'use client'

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

export default function Reward({ blogs }) {
  return (
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination, Navigation]}

      >
        {blogs.map((blog, index) => {
          const texturl = blog.attributes.texturl || '#';
          const imageUrl = "http://localhost:1337" + blog.attributes.image.data?.[0].attributes.url;

          return (
            <SwiperSlide key={index}>
              <Link href={texturl} target='_blank'>
                <div className="group relative inline-block overflow-hidden">
                  <img src={imageUrl} className="max-h-[35rem] w-auto object-cover" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
                    <p className="text-white font-bold">{texturl}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
}
