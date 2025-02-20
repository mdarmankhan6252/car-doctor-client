import { FaQuoteRight } from "react-icons/fa";
import Rating from "../../components/Rating";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "Jhone Dehon",
    position: "CEO of Miracle",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg",
    review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  },
  {
    id: 2,
    name: "Shahzoda",
    position: "CEO of Arman",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  },
  {
    id: 3,
    name: "Michael Smith",
    position: "CTO of TechWorld",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Founder of DesignPro",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  }
];

const Testimonial = () => {
  return (
    <div className="my-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          
          750: { slidesPerView: 2, spaceBetween: 20 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="w-full rounded-lg p-6 relative py-10 border shadow-md mb-12">
              <FaQuoteRight className="text-[4rem] absolute top-[10%] right-[10%] text-gray-200" />
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[40px] h-[40px] object-cover rounded-full border-2 border-black"
                />
                <div>
                  <h2 className="text-[1rem] font-[500]">{testimonial.name}</h2>
                  <p className="text-[0.9rem] text-[#9c9797]">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-justify my-3 text-[#8a8585]">{testimonial.review}</p>
              <Rating />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
