import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Nav = () => {
   const { user, logOut } = useContext(AuthContext)
   return (
      <nav className='flex items-center justify-between py-6'>
         <Link to='/'>
            <img src={logo} alt="" className='max-w-20' />
         </Link>
         <ul className='text-gray-800 font-semibold space-x-6 text-[17px]'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {user && <>
            <NavLink to='/myCheckout'>My Checkout</NavLink>
            
            <span onClick={() => logOut()} className='bg-[#FF3811] text-white px-2 py-1 rounded-md cursor-pointer'>LogOut</span>
            </>
            }
         </ul>
         <Link to='/login' className='flex items-center space-x-6'>
            <CiShoppingCart className='text-3xl' />
            <CiSearch className='text-3xl' />
            <button className='btn_1'>Sign In</button>
         </Link>
      </nav>
   );
};

export default Nav;