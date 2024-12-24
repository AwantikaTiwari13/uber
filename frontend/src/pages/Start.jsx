import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <>
        <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1572848119280-46bca6fabb75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
           <img className='w-16 ml-8'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  />
           <div className='bg-white pb-7 py-4 px-4 rounded-t-3xl '>
            <h2 className=' text-3xl text-rgb(20, 53, 33) font-bold '>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>

        </div>
        </div>
        </>   
    );
};

export default Start;