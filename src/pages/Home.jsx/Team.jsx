import img_1 from '../../assets/images/team/1.jpg'
import img_2 from '../../assets/images/team/2.jpg'
import img_3 from '../../assets/images/team/3.jpg'

import { FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Team = () => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-20 gap-8'>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_1} alt="" className='w-full rounded-md' />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <p className='text-gray-600'>Engine Expert</p>
            <div className='flex items-center space-x-3 text-2xl *:cursor-pointer hover:*:text-blue-500 text-red-500 justify-center pt-4 '>
                     <FaGoogle />
                     <FaXTwitter />
                     <FaInstagram />
                     <FaLinkedinIn />
                  </div>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_2} alt="" className='w-full rounded-md' />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <p className='text-gray-600'>Engine Expert</p>
            <div className='flex items-center space-x-3 text-2xl *:cursor-pointer hover:*:text-blue-500 text-red-500 justify-center pt-4 '>
                     <FaGoogle />
                     <FaXTwitter />
                     <FaInstagram />
                     <FaLinkedinIn />
                  </div>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_3} alt="" className='w-full rounded-md' />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <p className='text-gray-600'>Engine Expert</p>
            <div className='flex items-center space-x-3 text-2xl *:cursor-pointer hover:*:text-blue-500 text-red-500 justify-center pt-4 '>
                     <FaGoogle />
                     <FaXTwitter />
                     <FaInstagram />
                     <FaLinkedinIn />
                  </div>
         </div>
         
      </div>
   );
};

export default Team;