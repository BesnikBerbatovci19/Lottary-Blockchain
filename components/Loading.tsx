import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader';
const Loading = () => {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'>
    <div className='flex items-center space-x-2 mb-10'>
      <img  className="rounded-full h-20 w-20" src='https://lh3.googleusercontent.com/2Cc469OUdtlafZCe1EGMiYJn_wqz3f8ddgpLWspuS4lwn0SyALtS8A69sHSV-g3bEySKIP8EyiKZoBiiC12pZRpQLzl6G-aCQ2bqRA=s0' alt="..."/>
      <h1 className='text-lg text-white font-bold'>Loading the SEBI DRAW</h1>
    </div>
    <PropagateLoader color='white' size={30} />
  </div>
  )
}

export default Loading