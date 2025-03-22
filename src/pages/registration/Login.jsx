import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h2 className='text-center text-xl mb-4 text-white font-bold'>Login</h2>
                </div>
                <div >
                    <input type='email' name='email' placeholder='Enter Email' className='bg-gray-600 text-white w-full lg:w-[20em] px-2 py-2 mb-4 rounded-lg placeholder:text-gray-200 outline-none' />
                </div>
                <div >
                    <input type='password' placeholder='Enter Password' className='bg-gray-600 text-white w-full lg:w-[20em] px-2 py-2 mb-4 rounded-lg placeholder:text-gray-200 outline-none' />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account ? <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login
