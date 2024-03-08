import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BrandItems({index, brandLogo, name}) {
  return (
    <Link href={"/brands/" + name.slice(0,1).toLowerCase() + name.slice(1)} key={index} className='h-[200px] flex items-center justify-center flex-col border-2 border-gray-400 m-2 rounded-xl relative'>
      <Image src={brandLogo} width={100} height={100} alt={name + "logo"} className=''></Image>
      <h2 className='font-bold text-lg my-2'>{name}</h2>
    </Link>
  )
}

export default BrandItems