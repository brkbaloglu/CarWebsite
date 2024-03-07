import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className='my-10'>
      <div className='grid grid-cols-3 mx-10 h-[300px]'>
        <div className='flex items-center justify-center'>
          <h2 className='text-6xl font-bold'>CAR</h2>
        </div>
        <div className='border-x-2 border-black flex items-center justify-center'>
          <ul>
            <li><Link href="/" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Payment Options</Link></li>
            <li><Link href="/" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Management</Link></li>
            <li><Link href="/" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Business Partners</Link></li>
            <li><Link href="/" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Protection of Personal Data</Link></li>
          </ul>
        </div>
        <div className='flex items-center justify-center'>
          <ul className=''>
            <li><Link href="/" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Home</Link></li>
            <li><Link href="/brands" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Brands</Link></li>
            <li><Link href="/cars" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Cars</Link></li>
            <li><Link href="/contact" className='flex items-center hover:translate-x-4 duration-300'><FaArrowRight className='mx-2' />Contact</Link></li>
          </ul>
        </div>
      </div>
      <div>
          <p className='px-20 bg-black text-white py-2 my-8'>&copy; Copyright | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer