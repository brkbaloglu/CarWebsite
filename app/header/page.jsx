import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex items-center justify-between px-20 h-[80px]  sticky top-0 bg-white z-10'>
      <div>
        <h2 className='text-3xl font-bold'>CAR</h2>
      </div>
      <div>
        <ul className='flex items-center justify-center'>
          <li className='mx-2 hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link href="/">Home</Link></li>
          <li className='mx-2 hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link href="/brands">Brands</Link></li>
          <li className='mx-2 hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link href="/cars">Cars</Link></li>
          <li className='mx-2 hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header