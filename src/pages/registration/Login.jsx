import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'

const Login = () => {
    const navigate = useNavigate()
    const context = useContext(myContext)
    const { loading, setLoading } = context

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            toast.success('Login successfully')
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h2 className='text-center text-xl mb-4 text-white font-bold'>Login</h2>
                </div>
                <div >
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='bg-gray-600 text-white w-full lg:w-[20em] px-2 py-2 mb-4 rounded-lg placeholder:text-gray-200 outline-none' />
                </div>
                <div >
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='bg-gray-600 text-white w-full lg:w-[20em] px-2 py-2 mb-4 rounded-lg placeholder:text-gray-200 outline-none' />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button onClick={handleLogin}
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
