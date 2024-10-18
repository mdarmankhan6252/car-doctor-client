import img_1 from '../../assets/icons/group.svg'
import img_3 from '../../assets/icons/person.svg'
import img_4 from '../../assets/icons/equipment.svg'
import img_5 from '../../assets/icons/check.svg'
import img_6 from '../../assets/icons/deliveryt.svg'
import { FaRegClock } from 'react-icons/fa'


const Features = () => {
   return (
      <div className='grid grid-cols-3 sm:grid-cols-6 py-20 gap-6'>
         <div className='text-center p-6 border shadow-[0px_0px_2px_0px] shadow-gray-300 space-y-2'>
            <img src={img_1} alt="" className='w-full' />
            <h5 className='font-semibold text-[14px]'>Expert Team</h5>
         </div>
         <div className='text-center p-6 border shadow-[0px_0px_2px_0px] shadow-gray-300 space-y-2 bg-[#ff3811]'>
            <div className='flex justify-center py-6'>
               <FaRegClock className='text-5xl text-white'/>
            </div>
            <h5 className='font-semibold text-[14px]  text-white'>Timely Delivery</h5>
         </div>
         <div className='text-center p-6 border shadow-[0px_0px_2px_0px] shadow-gray-300 space-y-2'>
            <div className='flex justify-center'><img src={img_3} alt="" className='w-2/3' /></div>
            <h5 className='font-semibold text-[14px]'>24/7 Support</h5>
         </div>
         <div className='text-center p-6 border shadow-[0px_0px_2px_0px] shadow-gray-300 space-y-2'>
            <div className='flex justify-center'><img src={img_4} alt="" className='w-2/3' /></div>
            <h5 className='font-semibold text-[14px]'>Best Equipment</h5>
         </div>
         <div className='text-center p-6 border shadow-[0px_0px_2px_0px] shadow-gray-300 space-y-2'>
            <div className='flex justify-center'><img src={img_5} alt="" className='w-2/3' /></div>
            <h5 className='font-semibold text-[14px]'>100% Guranty</h5>
         </div>
         <div className='text-center p-6 border shadow-[0px_0px_2px_0px] shadow-gray-300 space-y-2'>
            <div className='flex justify-center'>
               <img src={img_6} alt="" className='w-4/5' />
            </div>
            <h5 className='font-semibold text-[14px]'>Timely Delivery</h5>
         </div>
      </div>
   );
};

export default Features;

