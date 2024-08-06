import React from 'react'
import Link from 'next/link'

function Navber() {
  return (
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <button className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><Link href="/">daisyUI</Link></button>
        <ul className="flex space-x-8 text-center">
          <li className=''><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <ii><Link href="/personnel">Personnel</Link></ii>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navber
