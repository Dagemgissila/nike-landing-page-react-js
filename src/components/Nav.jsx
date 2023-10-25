import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 w-full absolute z-10'>
       <nav className='flex justify-between items-center max-container'>
       <a href="">
        <img src={headerLogo}
         alt="Logo" 
         width={130}
         height={29}
         />
      </a>
      <ul className='flex flex-1 justify-center gap-16 items-center max-lg:hidden'>
              {navLinks.map((item)=>(
                 <li key={item.label}>
                        <a href={item.href}
                        className='text-monts errat leading-normal  text-lg  text-slate-gray'
                        >
                         {item.label}   
                        </a>
                 </li>
              ))}
      </ul>
      <div className='hidden max-lg:block'>
        <img src={hamburger} width={25} height={25}  alt="humberger" />
      </div>
       </nav>
    </header>
  )
}

export default Nav;