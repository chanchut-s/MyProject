'use client'

import React from 'react'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

function Botton() {
    return (
        <Link className='flex justify-center' href="/news">
            <Button className='bg-blue-900 font-prompt'>ดูทั้งหมด</Button>
        </Link>
    )
}

export default Botton