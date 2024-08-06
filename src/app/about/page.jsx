import React from 'react'
import Heading from '../components/Heading'

function about() {
  return (
    <div className='bg-gray-300'>
      <Heading text={"เกี่ยวกับเรา"}/>

      <div className='pl-4 pt-4'>
        <h1 className='text-4xl font-bold'>About</h1>
        <div className='px-4 py-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad facilis pariatur expedita maiores incidunt atque quis officia ut cum voluptatem, nobis at, sapiente illum provident repudiandae? Ratione, qui commodi dolorum excepturi corrupti id perferendis quam perspiciatis repellat incidunt consectetur aut quo, adipisci accusamus, laudantium distinctio blanditiis alias rem corporis.</p>
        </div>

        <h1 className='text-4xl font-bold'>Vision</h1>
        <div className='px-4 py-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem ex fugiat eos consequuntur nesciunt vitae atque sit quisquam a qui libero corrupti facilis eaque, quibusdam commodi non quidem alias placeat ducimus animi molestias recusandae molestiae? Facilis numquam, totam voluptas tempore iusto vero voluptatum delectus! Facere inventore officia consectetur esse!</p>
        </div>
      </div>
    </div>
  )
}

export default about