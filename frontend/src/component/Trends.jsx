import React from 'react'
import trend1 from '../assets/trend1.png'
import trend2 from '../assets/trend2.png'
import trend3 from '../assets/trend3.png'
import trend4 from '../assets/trend4.png'
import trend5 from '../assets/trend5.png'
import trend6 from '../assets/trend6.png'

function Trends() {
    const movies=[
        {
            "id":1,
            "url":trend1
        },
        {
            "id":2,
            "url":trend2
        },
        {
            "id":3,
            "url":trend3
        },
        {
            "id":4,
            "url":trend4
        },
        {
            "id":5,
            "url":trend5
        },
        {
            "id":6,
            "url":trend6
        },
         {
            "id":7,
            "url":trend1
        },
        {
            "id":8,
            "url":trend2
        },
        {
            "id":9,
            "url":trend3
        },
        {
            "id":10,
            "url":trend4
        }
    ]
  return (
    <div className='py-10'>
        <div className='font-bold text-2xl'>Trending Now</div>
        <div className='flex gap-5 overflow-scroll hide-scrollbar'>
            {movies.map((movie)=>{
              return(
                <div key={movie.id} className='pt-5 ml-5 relative min-w-[150px]'>
            <img className='rounded-2xl' src={movie.url} alt="" />
            <div className='text-8xl font-bold absolute bottom-0 left-[-25px] text-stroke-white'>
                {movie.id}
            </div>
            </div>
              )
            })}       
        </div>
    </div>
  )
}

export default Trends