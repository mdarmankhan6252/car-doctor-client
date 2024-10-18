import { IoMdCart } from 'react-icons/io'
import img_1 from '../../assets/images/products/1.png'
import img_2 from '../../assets/images/products/2.png'
import img_3 from '../../assets/images/products/3.png'
import img_4 from '../../assets/images/products/4.png'
import img_5 from '../../assets/images/products/5.png'
import img_6 from '../../assets/images/products/6.png'
import Rating from '../../components/Rating'

const Products = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-24 gap-8">
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_1} alt="" className='w-full rounded-md' />
            </div>
            <div className='flex justify-center'>
               <Rating />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <h4 className='text-lg font-semibold text-red-500'>$ 20.00</h4>
            <IoMdCart className='text-4xl border p-1 absolute top-96 right-4 cursor-pointer shadow-[0px_0px_2px_0px] shadow-gray-400 hover:scale-105 duration-500 opacity-0  group-hover:top-4 group-hover:opacity-100 hover:text-red-500'/>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_2} alt="" className='w-full rounded-md' />
            </div>
            <div className='flex justify-center'>
               <Rating />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <h4 className='text-lg font-semibold text-red-500'>$ 20.00</h4>
            <IoMdCart className='text-4xl border p-1 absolute top-96 right-4 cursor-pointer shadow-[0px_0px_2px_0px] shadow-gray-400 hover:scale-105 duration-500 opacity-0  group-hover:top-4 group-hover:opacity-100 hover:text-red-500'/>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_3} alt="" className='w-full rounded-md' />
            </div>
            <div className='flex justify-center'>
               <Rating />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <h4 className='text-lg font-semibold text-red-500'>$ 20.00</h4>
            <IoMdCart className='text-4xl border p-1 absolute top-96 right-4 cursor-pointer shadow-[0px_0px_2px_0px] shadow-gray-400 hover:scale-105 duration-500 opacity-0  group-hover:top-4 group-hover:opacity-100 hover:text-red-500'/>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_4} alt="" className='w-full rounded-md' />
            </div>
            <div className='flex justify-center'>
               <Rating />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <h4 className='text-lg font-semibold text-red-500'>$ 20.00</h4>
            <IoMdCart className='text-4xl border p-1 absolute top-96 right-4 cursor-pointer shadow-[0px_0px_2px_0px] shadow-gray-400 hover:scale-105 duration-500 opacity-0  group-hover:top-4 group-hover:opacity-100 hover:text-red-500'/>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_5} alt="" className='w-full rounded-md' />
            </div>
            <div className='flex justify-center'>
               <Rating />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <h4 className='text-lg font-semibold text-red-500'>$ 20.00</h4>
            <IoMdCart className='text-4xl border p-1 absolute top-96 right-4 cursor-pointer shadow-[0px_0px_2px_0px] shadow-gray-400 hover:scale-105 duration-500 opacity-0  group-hover:top-4 group-hover:opacity-100 hover:text-red-500'/>
         </div>
         <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400 text-center relative group'>
            <div>
               <img src={img_6} alt="" className='w-full rounded-md' />
            </div>
            <div className='flex justify-center'>
               <Rating />
            </div>
            <h2 className='font-bold py-4 text-lg sm:text-xl'>Car Engine Plug</h2>
            <h4 className='text-lg font-semibold text-red-500'>$ 20.00</h4>
            <IoMdCart className='text-4xl border p-1 absolute top-96 right-4 cursor-pointer shadow-[0px_0px_2px_0px] shadow-gray-400 hover:scale-105 duration-500 opacity-0  group-hover:top-4 group-hover:opacity-100 hover:text-red-500'/>
         </div>


      </div>
   );
};

export default Products;