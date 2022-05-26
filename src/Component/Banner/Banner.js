import React from 'react'
import { Button } from 'react-bootstrap'
import banner from '../../assets/img/banner.png'
import palette from '../../assets/img/palettes_7.png'

export default function Banner() {
  const user = {}
  return (
    <div className='flex'>
      <div className='w-[30%] bg-white h-[600px] mt-[120px] ml-[240px]'>
        <h2 className='text-[70px] w-[500px] font-extrabold justify-center'>The super fast color palettes generator!</h2>
        <p className='text-[18px] w-[400px] font-sans ml-[45px] mt-6'>Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>
        <div className='w-[260px] ml-[120px]'>
          <Button variant="primary" className='w-[260px] mb-2'>Start the generator!</Button>
          <Button variant="outline-dark" className='w-[260px]'>Explore trending palettes</Button>
        </div>
        <p className='mt-3 mr-[200px] font-bold'>We have {user.length || '3 million'} users!</p>
      </div>
      <div className='w-[70%]'>
        <img src={banner} className='w-full' />
        <div></div>
      </div>
    </div>
  )
}
