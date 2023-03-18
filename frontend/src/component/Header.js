import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiUserCircle } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
      setShowMenu(preve => !preve)
    }
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* desktop */}

            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                    <div className='h-10'>
                        <img src={logo} className="h-full" />
                    </div>
                </Link>

                <div className='flex items-center gap-4 md:gap-7 '>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>

                    </nav>
                    <div className='text-2xl text-slate-800 relative'>
                        <GiShoppingCart />
                        <div className='absolute -top-1 -right-1 text-white bg-red-600 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
                    </div>
                    <div className='text-2xl text-slate-800' onClick={handleShowMenu}>
                        <div className="text-3xl cursor-pointer" >
                            <BiUserCircle />
                        </div>
                        {showMenu && (
                        <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                            <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer text-sm'>New product</Link>
                            <Link to={"login"} className='whitespace-nowrap cursor-pointer text-sm'>Login</Link>
                        </div>
                      )}
                    </div>
                </div>
            </div>


            {/* mobile */}
        </header>
    )
}

export default Header