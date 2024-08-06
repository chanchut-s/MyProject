'use client'

import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

function CardPersonnelProfile({ blog }) {
  const tabData = [
    {
      label: "ข้อมูล",
      value: "info",
      desc: (
        <div>
          <p className="pl-14">ชื่อ: {blog.attributes.NameTH}</p>
          <p className="pl-[83px]">{blog.attributes.NameEN}</p>
          <p className='pl-10 pt-2'>อีเมล์: {blog.attributes.Email}</p>
          <p className='pl-4'>เบอร์โทร: {blog.attributes.telephone}</p>
          <p>ห้องทำงาน: {blog.attributes.workroom}</p>
          {/* <img
                src={"http://localhost:1337"+blog.attributes.Image.data?.[0].attributes.url}
              /> */}
        </div>
      ),
    },
    {
      label: "การศึกษา",
      value: "education",
      desc: (
        <div>
          <h2 className="text-xl font-semibold">การศึกษา</h2>
          <ul className='pl-4'>
            {(blog.attributes.blogEducation?.Education_Level || []).map((item, index) => (
              <li key={index}>{item.children[0]?.text}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      label: "ความถนัด",
      value: "Aptitude",
      desc: (
        <div>
          <h2 className="text-xl font-semibold">ความถนัด</h2>
        </div>
      ),
    },
  ];
  return (
    <div className='bg-white p-4 h-[22rem] rounded-lg'>
      <Tabs value="info" >
        <TabsHeader className='w-[18rem]'>
          {tabData.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabData.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default CardPersonnelProfile