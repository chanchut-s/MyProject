import React from 'react'
import Link from 'next/link'

function Navber() {
  return (
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <button className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><Link href="/">SRU</Link></button>
        <ul className="flex space-x-8 text-center">
          <li className='text-blue-900 hover:text-gray-500'><Link href="/">หน้าแรก</Link></li>
          <li className='text-blue-900 hover:text-gray-500'><Link href="/about">เกี่ยวกับ</Link></li>
          <ii className='text-blue-900 hover:text-gray-500'><Link href="/personnel">บุคลากร</Link></ii>
          <li className='text-blue-900 hover:text-gray-500'><Link href="/news">ข่าว</Link></li>
          <li className='text-blue-900 hover:text-gray-500'><Link href="/contact">ติดต่อ</Link></li>
          <li><button className='rounded-full bg-blue-900 hover:bg-white text-white hover:text-gray-500 w-[6rem]'><Link href={"http://localhost:1337/admin/auth/login"}>เข้าสู่ระบบ</Link></button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navber
