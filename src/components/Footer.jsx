import logo from '../assets/logo.svg'
import { FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ResponsiveFooter = () => {

   return (
      <footer className="boxShadow w-full px-3 py-6 sm:py-12 bg-gradient-to-tr from-red-100 via-purple-100 to-pink-100">
         <div
            className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full max-w-7xl mx-auto">
            <div className="w-full sm:w-[25%] ">
               <img src={logo} alt="logo" className="max-w-20" />
               <div className="flex flex-col gap-[20px] text-primary">
                  <p className='text-[15px] mt-4'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                  <div className='flex items-center space-x-3 text-2xl *:cursor-pointer hover:*:text-[#ff3811]'>
                     <FaGoogle />
                     <FaXTwitter />
                     <FaInstagram />
                     <FaLinkedinIn />
                  </div>
               </div>
            </div>

            <div className="">
               <h3 className="text-[1.2rem] font-semibold text-text mb-2">About</h3>
               <div className="flex flex-col gap-[10px]">
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">UI
                     Components</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Website
                     Templates</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Icons</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Opacity
                     Palette</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blocks</p>
               </div>
            </div>


            <div className="">
               <h3 className="text-[1.2rem] font-semibold text-text mb-2">Company</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Service</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Features</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Our
                     Team</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Portfolio</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blog</p>
               </div>
            </div>


            <div className="">
               <h3 className="text-[1.2rem] font-semibold text-text mb-2">Our Social Media</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Dribbble</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Behance</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Medium</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Instagram</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Facebook</p>
               </div>
            </div>
         </div>
         <p className='text-sm pt-6 text-center'>All Rights Reserved By <span className='text-[#ff3811] font-semibold'>MD Arman Khan</span></p>
      </footer>
   );
};

export default ResponsiveFooter;
