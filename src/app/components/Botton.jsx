'use client'

import React from 'react'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

function Botton() {
    return (
        <Link href="/news">
            <Button variant="outlined" color="blue">ดูทั้งหมด</Button>
        </Link>
    )
}

export default Botton