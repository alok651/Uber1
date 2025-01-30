// import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-left bg-[url(https://cdn-lhnkp.nitrocdn.com/OzJxhgwXvFaKkYzRKLpixnWqwhSAROhH/assets/images/optimized/rev-198d44f/miovision.com/wp-content/uploads/2024/06/unnamed-2.png)] h-screen  pt-8  flex justify-between flex-col w-full'>
        <img  className="w-20 ml-8" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <div className="bg-white py-4 px-4">
        <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
        <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 mb-7">Continue</Link>
      </div>
      </div>
    </div>
  )
}

export default Start

