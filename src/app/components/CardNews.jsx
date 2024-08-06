'use client'

import React from 'react'
import Link from 'next/link';
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
  const updatedAt = new Date(blog.attributes.updatedAt);
  const formattedDate = updatedAt.toLocaleDateString('th-TH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return (
    <div>
      <Card className="w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-[15rem]"
        >
          <img
            src={"http://localhost:1337" + blog.attributes.thumbnail.data?.[0].attributes.formats.medium.url}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {blog.attributes.title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal h-[6rem] line-clamp-3">
            {blog.attributes.detail}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Link href={`readNews/${blog.id}`} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2">
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