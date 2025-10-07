import React from 'react'
import logo from '../assets/logoo.png';
import logo1 from '../assets/logoo2.svg';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex h-13 items-center text-white font text-xl justify-between px-1  bg-black-50'>
                <div className="logo mt-2 flex gap-2 h-14 w-auto">
                    <img src={logo} alt="PassVault Logo"/>
                    <img src={logo1} alt="" />
                </div>
                <div className="content flex gap-4 font">
                    <li className='transition-colors duration-300 hover:text-gray-300  cursor-pointer'>Home</li>
                    <li className='transition-colors duration-300 hover:text-gray-300  cursor-pointer'>About</li>
                    <li className='transition-colors duration-300 hover:text-gray-300  cursor-pointer'>Contact</li>
                </div>
            </ul>

        </nav>
    )
}

export default Navbar
