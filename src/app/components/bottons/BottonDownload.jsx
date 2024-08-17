'use client'

import React from 'react'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

function BottonDownload({blog}) {
    const file = "http://localhost:1337" + blog.attributes.url
    const name = blog.attributes.name
    return (
        <Link href={file} target='_blank'>
            <p className='text-blue-500 hover:text-blue-gray-300 font-prompt'>{name}</p>
            {/* <Button variant="text" className='text-blue-500 hover:text-blue-gray-300'>{name}</Button> */}
        </Link>
    )
}
export default BottonDownload