import { BiArrowBack } from "react-icons/bi";

const Service = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div className="border py-10 px-6 rounded-xl shadow-[0px_0px_3px_0px] shadow-gray-300 space-y-5 flex flex-col">
            <div className="flex justify-center flex-grow overflow-hidden rounded-xl">
                <img src={img} alt="my image" className="rounded-lg w-full hover:scale-110 duration-500"/>
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-red-500">Price : ${price}</h3>
                <BiArrowBack className="rotate-180 hover:-rotate-180 duration-500 text-xl cursor-pointer hover:text-red-500"/>
            </div>
                        
        </div>
    );
};

export default Service;