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
      desc: blog.attributes.NameTH || blog.attributes.NameEN || blog.attributes.Email || blog.attributes.telephone || blog.attributes.workroom ? (
        <div>
          <div className='flex space-x-2'>
            <div className="font-semibold">ชื่อภาษาไทย:</div>
            <div>{blog.attributes.NameTH}</div>
          </div>
          <div className='flex space-x-2'>
            <div className="font-semibold">ชื่อภาษาอังกฤษ:</div>
            <div>{blog.attributes.NameEN}</div>
          </div>
          <div className='flex space-x-2'>
            <div className="font-semibold">อีเมล์:</div>
            <div>{blog.attributes.Email}</div>
          </div>
          <div className='flex space-x-2'>
            <div className="font-semibold">เบอร์โทร:</div>
            <div>{blog.attributes.telephone}</div>
          </div>
          <div className='flex space-x-2'>
            <div className="font-semibold">ห้องทำงาน:</div>
            <div>{blog.attributes.workroom}</div>
          </div>
        </div>
      ) : null,
    },
    {
      label: "การศึกษา",
      value: "education",
      desc: blog.attributes.blogEducation?.Education_Level?.length ? (
        <div>
          <h2 className="text-xl font-semibold">การศึกษา</h2>
          <ul className='pl-4'>
            {blog.attributes.blogEducation?.Education_Level.map((item, index) => (
              <li key={index}>{item.children[0]?.text}</li>
            ))}
          </ul>
        </div>
      ) : null,
    },
    {
      label: "ความถนัด",
      value: "Aptitude",
      desc: blog.attributes.blogEducation?.Aptitude?.length ? (
        <div>
          <h2 className="text-xl font-semibold">ความถนัด</h2>
          <ul className='pl-4'>
            {blog.attributes.blogEducation?.Aptitude.map((item, index) => (
              <li key={index}>{item.children[0]?.text}</li>
            ))}
          </ul>
        </div>
      ) : null,
    },
    {
      label: "นิสิต",
      value: "Student",
      desc: (blog.attributes.blogEducation?.Student?.length || blog.attributes.blogEducation?.Graduate?.length) ? (
        <div>
          {blog.attributes.blogEducation?.Student?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold">รายชื่อนิสิตที่ดูแล</h2>
              <ul className='pl-4 pt-1'>
                {blog.attributes.blogEducation.Student.map((item, index) => (
                  <li key={index}>{item.children[0]?.text}</li>
                ))}
              </ul>
            </div>
          )}
          {blog.attributes.blogEducation?.Graduate?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold pt-4">นิสิตที่จบแล้ว</h2>
              <ul className='pl-4 pt-1'>
                {blog.attributes.blogEducation.Graduate.map((item, index) => (
                  <li key={index}>{item.children[0]?.text}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : null,
    },
    
  ].filter(tab => tab.desc); // Filter out tabs with no content



  return (
    <div className='bg-white p-4 h-[22rem] rounded-lg'>
      <Tabs value={tabData[0]?.value || "info"}>
        <TabsHeader className='inline-flex'>
          {tabData.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="flex-grow px-4 py-1 text-center whitespace-nowrap font-prompt"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabData.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="h-[16rem] overflow-y-auto font-prompt">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default CardPersonnelProfile;
