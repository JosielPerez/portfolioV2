import React from 'react'
import './globals.css'

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className=" h-screen bg-purple-light">
      {/* top row */}
      <div className=' flex h-2/6 p-4  space-x-4 '>
        <div className='h-full w-2/5 rounded-lg  hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-dark-100'>

        </div>
        <div className='h-full w-3/5 rounded-lg hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-light-300'>

        </div>

      </div>
      {/* middle row */}
      <div className=' flex h-2/6 px-4 pb-4  space-x-4 '>
        <div className='h-full w-3/5 rounded-lg hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-dark-300'>
        </div>
        <div className='h-full w-2/5 rounded-lg hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-dark-100'>

        </div>
      </div>

      {/* bottom row */}
      <div className=' flex h-2/6 px-4 pb-4 space-x-4'>
        <div className='h-full w-2/6 rounded-lg hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-light-300'>
        </div>
        <div className='h-full w-2/6 rounded-lg hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-dark-400'>
        </div>
        <div className='h-full w-2/6 rounded-lg hover:scale-102 transition-transform duration-300 cursor-pointer bg-purple-dark-100'>
        </div>
      </div>
      
    </div>
  )
}
