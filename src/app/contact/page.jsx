import React from 'react'
import Image from 'next/image'
import Heading from '../components/Heading'

function contact() {
  return (
    <div className='bg-gray-300'>
  <Heading text={"ติดต่อ"} />
  <div className='p-10 flex flex-col md:flex-row justify-center items-center'>
    <div className='Container w-full md:w-2/5 bg-white space-y-3 p-7 drop-shadow-xl h-auto md:h-[35rem]'>
      <h1>
        ที่อยู่ : 50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900
        โทรศัพท์ : 0-2xxx-xxxx, 0-2xxx-xxxx
        อีเมล : Sru@ku.ac.th
      </h1>
      <div className='flex items-center space-x-5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className='w-10 h-10'>
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        <p>SRU Google Form</p>
      </div>

      <div className='flex space-x-5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-10 h-10'>
          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
        <div className='pt-2'>
          <p>เวลาทำการ</p>
          <p>ปิดทำการวันจันทร์ - วันศุกร์เวลา 10:00 - 17:00 น.</p>
          <p>วันหยุดให้บริการ</p>
          <div className='pl-3'>
            <p>-ทุกวันเสาร์</p>
            <p>-วันอาทิตย์</p>
            <p>-วันหยุดนักขัตฤกษ์</p>
          </div>
        </div>
      </div>
    </div>
    <div className='Container w-full md:w-2/5 flex justify-center my-5 md:my-0'>
      <img className='object-cover w-full h-auto' src="google.png" alt="" />
    </div>
  </div>
</div>



  )
}

export default contact