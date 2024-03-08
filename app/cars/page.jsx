import React from 'react'
import cars from '../../data/cars.json' 
import Link from 'next/link'

function Cars() {
  return (
    <div>
      <h2 className='font-bold text-4xl text-center my-10'>Our Cars</h2>
      <div className='grid grid-cols-3 mx-5'>
      {
        cars.cars.map((car, index) => (
          <div key={index} className='font-bold my-2 relative mx-10 h-[70px]'>
              <h2 className='text-xl '><span className=''>{car.carBrand + " " +car.carSeries}</span></h2>
              <p>Price: <span className='font-normal'>{car.averagePrice}$</span></p>
              <Link className='absolute bottom-5 right-5 border-2 px-4 py-2 rounded-xl border-black hover:bg-black hover:text-white' href="/">Details</Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cars