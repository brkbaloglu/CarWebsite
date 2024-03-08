import React from 'react'
import brands from '../../data/brands.json' 
import BrandItems from '@/components/brandItems/page'

// console.log(brands.brands[0]);

function Brands() {
  return (
    <div>
      <h2 className='font-bold text-4xl text-center my-10'>Our Brands</h2>
      <div className='grid grid-cols-6 mx-5'>
      {
        brands.brands.map((brand, index) => (
          <BrandItems index={index} name={brand.name} brandLogo={brand.brandLogo}/>
        ))
      }
      </div>
    </div>
  )
}

export default Brands