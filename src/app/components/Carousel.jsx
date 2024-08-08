'use client'

import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

export function CarouselCustomNavigation({ blognews }) {
    return (
        <Carousel
            className=""
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {blognews.map((newsItem, index) => (
                <div key={index} className="relative">
                    <img
                        src={"http://localhost:1337" + newsItem.attributes.thumbnail.data[0].attributes.url}
                        alt={`image ${index + 1}`}
                        className="h-[26rem] w-full object-cover"
                    />
                    <Link href={`/readNews/${newsItem.id}`}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 mt-[16rem]">
                            <p className="text-4xl text-white p-4">{newsItem.attributes.title}</p>
                            <p className="text-xl text-white px-8 line-clamp-2 indent-8">{newsItem.attributes.content}</p>
                        </div>
                    </Link>
                </div>
            ))}

        </Carousel>
    );
}