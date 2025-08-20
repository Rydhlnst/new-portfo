import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-4 md:px-8 lg:px-16 h-14 sticky top-0 z-50 left-0 flex items-center justify-between bg-white'>
        <div className='w-full grid grid-cols-2 lg:grid-cols-3 justify-items-start py-3 gap-4'>
            <div>
                <h1 className='font-semibold text-sm md:text-[16px] tracking-wide'>Muhammad Riyadhul Jinan Nasution</h1>
            </div>
            <div className='lg:flex items-center justify-start lg:justify-center w-full'>
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold text-sm md:text-[16px]'>Web Developer</h2>
                </div>
            </div>
            <div className='hidden lg:flex items-center justify-start w-full'>
                <h2 className='font-semibold text-sm md:text-[16px]'>Indonesia</h2>
            </div>
        </div>
    </div>
  )
}

export default Navbar
