import React from 'react'

function Contact() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h2 className='font-bold text-4xl text-center my-10'>Contact Us</h2>
      <form action="" className='flex justify-center flex-col items-center'>
        <input className='border-2 px-4 py-2 border-black my-2 rounded-xl w-[400px]' type="text" name="name" id="name" placeholder='Enter Your Name' />
        <input className='border-2 px-4 py-2 border-black my-2 rounded-xl w-[400px]' type="email" name="email" id="email" placeholder='Enter Your E-mail' />
        <textarea className='border-2 px-4 py-2 border-black my-2 rounded-xl resize-none w-[400px]' name="message" id="message" placeholder='Enter Your Message' cols="30" rows="10"></textarea>
        <button className='px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white' type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Contact