import React from 'react'
import bgimg from '../assets/netflix-bg.jpg'
import name from '../assets/netflix-name.png'

function Nav() {
  return (
    <div>
      <div className=' py-5 bg-black bg-cover text-white z-10' >
        <div className='absolute inset-0 bg-cover bg-center opacity-30' style={{backgroundImage:`url(${bgimg})`}}>

        </div>
        <div className='relative z-0'>
          <div className='flex justify-between items-center '>
            <div className='w-40'>
              <img src={name} alt="" />
            </div>
        <div className='flex '>
          <div >
             <select className='pr-10 rounded border p-1 mr-2 border-gray-500' name="" id="">
                <option className='text-black' value="English">English</option>
                <option className='text-black' value="Tamil">Tamil</option>
             </select>
          </div>
           <button className='bg-red-800 rounded px-5 py-1 font-bold'>Sign in</button> 
          </div>
        </div>
        <div className='py-30 flex flex-col items-center'>
          <div className='text-5xl font-bold w-150 text-center'>
            Unlimited movies, shows, and more
          </div>
          <div className='py-5 font-bold text-[18px]'>
            Starts at ₹149. Cancel at any time.
          </div>
          <p className='w-120 text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='py-5 flex'>
            <input className='border border-gray-500  pr-28 pl-3 mr-2 rounded' type="email" placeholder='Enter Address' />
            <button className='bg-red-800 rounded font-bold py-4 px-15'>Get Started </button>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Nav