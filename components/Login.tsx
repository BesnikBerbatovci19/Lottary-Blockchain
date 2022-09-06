import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

const Login = () => {
  const connectWithMetamask = useMetamask()
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center'>
            <img className='rounded-full h-56 w-56 mb-10' src="https://lh3.googleusercontent.com/2Cc469OUdtlafZCe1EGMiYJn_wqz3f8ddgpLWspuS4lwn0SyALtS8A69sHSV-g3bEySKIP8EyiKZoBiiC12pZRpQLzl6G-aCQ2bqRA=s0" alt="..."/>
            <h1 className='text-6xl text-white font-bold'>THE SEBI</h1>
            <h2 className='text-white'>Get Started By logging in with tour MetaMask</h2>
            <button onClick={connectWithMetamask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-md font-bold'>
                Login with Metamask
            </button>
        </div>
    </div>
  )
}

export default Login