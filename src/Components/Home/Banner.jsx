import banner_1 from '../../assets/images/banner/1.jpg'
import banner_2 from '../../assets/images/banner/2.jpg'
import banner_3 from '../../assets/images/banner/3.jpg'
import banner_4 from '../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full *:lg:h-[80vh] ">
            <div id="slide1" className="carousel-item relative w-full  rounded-xl">
                <img
                    src={banner_1}
                    className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-end z-20">
                    <a href="#slide4" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❮</a>
                    <a href="#slide2" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❯</a>
                </div>
                <div className="absolute left-5 right-5 top-1/4 flex flex-col text-white transform justify-start space-y-6 z-10">
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Affordable Price For<br/> Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='space-x-5'>
                        <button className='btn btn-secondary'>Discovered More</button>
                        <button className='btn btn-primary'>Latest Project</button>
                    </div>
                </div>
                <div className="bannerLayer rounded-xl">
                    
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full rounded-xl">
                <img
                    src={banner_2}
                    className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-end z-20">
                    <a href="#slide1" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❮</a>
                    <a href="#slide3" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❯</a>
                </div>
                <div className="absolute left-5 right-5 top-1/4 flex flex-col text-white transform justify-start space-y-6 z-10">
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Affordable Price For<br/> Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='space-x-5'>
                        <button className='btn btn-secondary'>Discovered More</button>
                        <button className='btn btn-primary'>Latest Project</button>
                    </div>
                </div>
                <div className="bannerLayer rounded-xl">
                    
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <img
                    src={banner_3}
                    className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-end z-20">
                    <a href="#slide2" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❮</a>
                    <a href="#slide4" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❯</a>
                </div>
                <div className="absolute left-5 right-5 top-1/4 flex flex-col text-white transform justify-start space-y-6 z-10">
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Affordable Price For<br/> Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='space-x-5'>
                        <button className='btn btn-secondary'>Discovered More</button>
                        <button className='btn btn-primary'>Latest Project</button>
                    </div>
                </div>
                <div className="bannerLayer rounded-xl">
                    
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <img
                    src={banner_4}
                    className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-end z-20">
                    <a href="#slide3" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❮</a>
                    <a href="#slide1" className="py-3 bg-red-500 rounded-full text-white px-5 text-xl">❯</a>
                </div>
                <div className="absolute left-5 right-5 top-1/4 flex flex-col text-white transform justify-start space-y-6 z-10">
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Affordable Price For<br/> Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='space-x-5'>
                        <button className='btn btn-secondary'>Discovered More</button>
                        <button className='btn btn-primary'>Latest Project</button>
                    </div>
                </div>
                <div className="bannerLayer rounded-xl">
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;