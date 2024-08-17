import React from 'react'
import axios from 'axios'
import CardPersonnel from '../components/CardPersonnel';
import Heading from '../components/Heading';

const fetchBlogs = async () => {
  try {
    const [professorResponse, staffResponse, janitorResponse] = await Promise.all([
      axios.get('http://localhost:1337/api/personnel?populate=professor.blogEducation&populate=professor.Image'),
      axios.get('http://localhost:1337/api/personnel?populate=staff.blogEducation&populate=staff.Image'),
      axios.get('http://localhost:1337/api/personnel?populate=janitor.blogEducation&populate=janitor.Image')
    ]);

    const professors = professorResponse?.data?.data?.attributes?.professor?.data || [];
    const staffs = staffResponse?.data?.data?.attributes?.staff?.data || [];
    const janitors = janitorResponse?.data?.data?.attributes?.janitor?.data || [];


    return {
      professors, staffs, janitors
    };
  } catch (error) {
    console.log("Error fetching personnel data:", error);
    return {
      professors: [],
      staffs: [],
      janitors: []
    };
  }
};

async function personnel() {
  const { professors, staffs, janitors } = await fetchBlogs();
  return (
    <div className='bg-gray-300'>
      <Heading text={"บุคลากร"} />
      {professors.length > 0 && (
        <div className='grid justify-center space-y-10 p-10'>
          <div className='flex justify-center'>
            <h1 className='text-4xl font-bold text-blue-900'>อาจารย์</h1>
          </div>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {professors.map((professor, index) => (
              <CardPersonnel key={index} blogPersonnal={professor} />
            ))}
          </div>
        </div>
      )}

      {staffs.length > 0 && (
        <div className='bg-gray-100 grid justify-center space-y-10 p-10'>
          <div className='flex justify-center'>
            <h1 className='text-4xl font-bold text-blue-900'>เจ้าหน้าที่</h1>
          </div>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center font-prompt'>
            {staffs.map((staff, index) => (
              <CardPersonnel key={index} blogPersonnal={staff} />
            ))}
          </div>
        </div>
      )}

      {janitors.length > 0 && (
        <div className='grid justify-center space-y-10 p-10'>
          <div className='flex justify-center'>
            <h1 className='text-4xl font-bold text-blue-900'>ภารโรง</h1>
          </div>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {janitors.map((janitor, index) => (
              <CardPersonnel key={index} blogPersonnal={janitor} />
            ))}
          </div>
        </div>
      )}

    </div>

  )
}

export default personnel