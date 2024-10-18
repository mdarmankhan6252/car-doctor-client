import { Link } from "react-router-dom";

const SharedBanner = ({imgURL, title }) => {
   return (
      <div className="relative sm:h-[40vh] h-[30vh] w-full bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${imgURL})` }}>
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
         
         <Link to='/' className="absolute bottom-0 left-1/2 text-white p-2 -translate-x-1/2 bg-[#FF3811] px-16 cursor-pointer z-20 click_path">Home</Link>

         {/* Text on the right side */}
         <div className="relative flex justify-start items-center h-full">
            <div className="text-white p-8">
               <h1 className="text-4xl font-bold">{title}</h1>
            </div>
         </div>
      </div>
   );
};

export default SharedBanner;