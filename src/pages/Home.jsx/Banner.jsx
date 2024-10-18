import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  
  // Updated carousel data with title, text, and button
  const carouselData = [
    {
      img: 'https://i.ibb.co.com/98p8bfG/1.jpg',
      title: 'Affordable Price For Car Servicing',
      text: 'Discover new places and adventures with us.',
      buttonText: 'See More',
      buttonLink: '#'
    },
    {
      img: 'https://i.ibb.co.com/dK44ZT7/2.jpg',
      title: 'Edwin Diaz is a software',
      text: 'Find peace and beauty in the wild.',
      buttonText: 'Explore',
      buttonLink: '#'
    },
    {
      img: 'https://i.ibb.co.com/6FrDL3t/3.jpg',
      title: 'Get Started With Car Doctor',
      text: 'Experience the nightlife of vibrant cities.',
      buttonText: 'Get Started',
      buttonLink: '#'
    },
    {
      img: 'https://i.ibb.co.com/8jv61Cv/4.jpg',
      title: 'Edwin Diaz is a software',
      text: 'Take on thrilling experiences around the world.',
      buttonText: 'Join Now',
      buttonLink: '#'
    },
    {
      img: 'https://i.ibb.co.com/W0JKtbJ/5.jpg',
      title: 'Mountain Escape',
      text: 'Breathe the fresh mountain air.',
      buttonText: 'View More',
      buttonLink: '#'
    },
    {
      img: 'https://i.ibb.co.com/p34HNNw/6.jpg',
      title: 'Edwin Diaz is a software',
      text: 'Breathe the fresh mountain air.',
      buttonText: 'View More',
      buttonLink: '#'
    }
  ];

  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselData.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselData.length - 1 ? 0 : currentSlider + 1), [carouselData.length]);

  // Automatic slider transition every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
      <div className="h-60 w-full md:h-[500px] lg:h-[545px] relative overflow-hidden">
          {/* arrow left */}
          <button onClick={prevSlider} className="absolute bottom-6 right-16 z-50 flex justify-center items-center bg-[#f83b26] rounded-full w-6 h-6 md:w-8 md:h-8">
              <svg className="icon h-4 w-4 fill-white md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>          
          </button>
          {/* arrow right */}
          <button onClick={nextSlider} className="absolute bottom-6 z-50 right-4  flex justify-center items-center bg-[#f83b26] rounded-full w-6 h-6 md:w-8 md:h-8">
              <svg className="icon h-4 w-4 fill-white md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
          </button>
          {/* dots */}
          <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
            {carouselData.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlider(idx)} className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "wz-2"} h-2`}></button>
            ))}
          </div>
          {/* Carousel container */}
          <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
            {/* sliders */}
            {carouselData.map((slide, idx) => (
              <div key={idx} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] relative ">
                <img src={slide.img} className="w-full h-full object-cover rounded-xl" alt={`Slider - ${idx + 1}`} />
                {/* Title, Text, and Button */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center p-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-base md:text-lg mb-4">{slide.text}</p>
                  <a href={slide.buttonLink} className="btn_1 btn_2">{slide.buttonText}</a>
                </div>
              </div>
            ))}
          </div>
      </div>
  );
};

export default Banner;