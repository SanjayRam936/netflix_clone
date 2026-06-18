import React from 'react'
import Nav from './component/Nav'
import Trends from './component/Trends'
import Reason from './component/Reason'

function App() {
  return (
    <div className='bg-black px-20 text-white'>
      <Nav/>
      <Trends/>
      <Reason/>
    </div>
  )
}

export default App