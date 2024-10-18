import { SlCalender, SlLocationPin } from "react-icons/sl";
import { MdOutlineCall } from "react-icons/md";

const Details = () => {
   return (
      <div className="bg-black text-white px-10 py-16 rounded-lg flex items-center justify-between mb-20 flex-col md:flex-row gap-y-12">
         <div className="flex items-center space-x-4">
            <SlCalender className="text-3xl text-[#fa4622]"/>
            <div className="space-y-1">
               <p className="text-[14px]">We are open monday-friday</p>
               <h3 className="text-xl font-semibold sm:text-2xl">7:00 am - 9:00 pm</h3>
            </div>
         </div>
         <div className="flex items-center space-x-4">
            <MdOutlineCall className="text-3xl text-[#fa4622]"/>
            <div className="space-y-1">
               <p className="text-[14px]">Have a question?</p>
               <h3 className="text-xl font-semibold sm:text-2xl">+2546 251 2658</h3>
            </div>
         </div>
         <div className="flex items-center space-x-4">
            <SlLocationPin className="text-3xl text-[#fa4622]"/>
            <div className="space-y-1">
               <p className="text-[14px]">We are open monday-friday</p>
               <h3 className="text-xl font-semibold sm:text-2xl">Arman Street, Barishal</h3>
            </div>
         </div>
      </div>
   );
};

export default Details;