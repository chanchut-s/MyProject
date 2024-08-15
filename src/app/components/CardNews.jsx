'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import markdownToHtml from '../lib/markdownToHtml';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";



function CardNews({ blog }) {
  const [contentHtml, setContentHtml] = useState('');
  const updatedAt = new Date(blog.attributes.updatedAt);
  const formattedDate = updatedAt.toLocaleDateString('th-TH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  useEffect(() => {
    const content = async () => {
      const html = await markdownToHtml(blog.attributes.content);
      setContentHtml(html);
    }
    content();
  }, [blog.attributes.content]);

  return (
    <div>
      <Card className="w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-[15rem]"
        >
          <Link href={`readNews/${blog.id}`}><img className='object-cover'
            src={"http://localhost:1337" + blog.attributes.thumbnail.data?.[0].attributes.url}
            alt={blog.attributes.title}
          />
          </Link>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" className='text-blue-900'>
            {blog.attributes.title}
          </Typography>
          <div className="mt-3 font-normal h-[5rem] line-clamp-3 indent-4">
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Link href={`readNews/${blog.id}`} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2 text-blue-900">
              อ่านเพิ่มเติม
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
          <Typography className="font-normal">{formattedDate}</Typography>
        </CardFooter>
      </Card>
    </div>

  )
}

export default CardNews