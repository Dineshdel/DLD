import React from 'react'

import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'
// import user_icon from './assets/images.png'
// import pass_icon from './assets/download.png'

function create() {

      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block' style={{margin:"10px",height:"95%", width:'97%'}}>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
    
            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[600px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>CREATE ACCOUNT</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border hover:border-indigo-800 p-2' type="text" />
                        {/* <img src={user_icon} alt=""/> */}
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border hover:border-indigo-800 p-2' type="password" />
                        {/* <img src={pass_icon} alt=""/> */}
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Confirm Password</label>
                        <input className='border hover:border-indigo-800 p-2' type="password" />
                    </div>
                    <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>CREATE</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <Link to='/'>
                        <p className="font-bold hover:text-indigo-800" >Sign In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      )
    }

export default create
