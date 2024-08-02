import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo.svg'
import { IoBagRemoveOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
const Nav = () => {
    return (
        <nav className='flex items-center justify-between max-w-6xl mx-auto px-2 py-5'>
            <img src={logo} alt="" className='w-16' />
            <ul className='space-x-5 font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/register'>Register</NavLink>

            </ul>  
            <div className='flex items-center space-x-3'>
            <IoBagRemoveOutline className='text-2xl cursor-pointer'/>
            <CiSearch className='text-3xl cursor-pointer'/>
            <button className='btn btn-secondary cursor-pointer'>Appointment</button>
            </div>        
        </nav>
    );
};

export default Nav;