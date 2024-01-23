import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='bg-zinc-400'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='/Sign-in'>
            <li>SignIn</li>
          </Link>
          <Link to='/profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </div>
      
    </div>
  )
}

export default Header