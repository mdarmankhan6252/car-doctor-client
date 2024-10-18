
import { FaQuoteRight } from "react-icons/fa";
import Rating from "../../components/Rating";

const Testimonial = () => {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full rounded-lg p-6 relative py-10 border">
        <FaQuoteRight className="text-[4rem] absolute top-[10%] right-[10%] text-gray-200" />
        <div className="flex items-center gap-4 mt-4">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
            alt="demo/image"
            className="w-[40px] h-[40px] object-cover rounded-full border-2 border-black"
          />
          <div>
            <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
            <p className="text-[0.9rem] text-[#9c9797]">CEO of Miracle</p>
          </div>
        </div>

        <p className="text-justify my-3 text-[#8a8585]">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <Rating/>
      </div>
      <div className="w-full rounded-lg p-6 relative py-10 border">
        <FaQuoteRight className="text-[4rem] absolute top-[10%] right-[10%] text-gray-200" />
        <div className="flex items-center gap-4 mt-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="demo/image"
            className="w-[40px] h-[40px] object-cover rounded-full border-2 border-black"
          />
          <div>
            <h2 className="text-[1rem] font-[500]">Shahzoda</h2>
            <p className="text-[0.9rem] text-[#9c9797]">CEO of Arman</p>
          </div>
        </div>

        <p className="text-justify my-3 text-[#8a8585]">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <Rating/>
      </div>
    </div>
  );
};

export default Testimonial;
              