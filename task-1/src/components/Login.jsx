import React from 'react'

import loginImg from '../assets/login2.jpg'
import { Link } from 'react-router-dom'


function login() {

      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block' style={{margin:"10px",height:"95%", width:'97%'}}>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
    
            <div className='bg-violet-200 flex flex-col justify-center'>
                <form className='max-w-[600px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>LOGIN</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2 hover:border-indigo-800' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border hover:border-indigo-800 p-2' type="password" />
                    </div>
                    <Link to='/dashboard'>
                    <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>SIGN IN</button>
                    </Link>

                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <Link to='/create'>
                        <p className="font-bold hover:text-indigo-800">Create an account</p>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
      )
    }

export default login
