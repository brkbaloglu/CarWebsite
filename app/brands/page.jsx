import React from 'react'
import brands from '../../data/brands.json' 
import Image from 'next/image'


// console.log(brands.brands[0]);

function Brands() {
  return (
    <div>
      <h2 className='font-bold text-4xl text-center my-10'>Our Brands</h2>
      <div className='grid grid-cols-6 mx-5'>
      {
        brands.brands.map((brand, index) => (
          <div key={index} className='h-[250px] flex items-center justify-center flex-col border-2 border-gray-400 m-2 rounded-xl relative'>
            <Image src={brand.brandLogo} width={100} height={100} alt={brand.name + "logo"} className=''></Image>
            <h2 className='font-bold text-lg my-2'>{brand.name}</h2>
            <h5>{brand.yearOfFoundation} - </h5>
            <Image className='absolute bottom-2 left-2 border-2 border-gray-200/60' src={brand.countryFlag} width={30} height={30} alt={brand.country + "flag"}></Image>
          </div>

        ))
      }
      </div>
    </div>
  )
}

export default Brands