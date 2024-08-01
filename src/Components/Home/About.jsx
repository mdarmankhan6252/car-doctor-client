import img_1 from '../../assets/images/about_us/person.jpg'
import img_2 from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='flex justify-between my-16 gap-10 items-center'>
            <div className='relative'>
                <img src={img_1} alt="" className=' top-0 left-0 w-full rounded-xl'/>
                <img src={img_2} alt="" className='absolute -bottom-7 -right-7 w-3/5 border-8 border-white rounded-xl outline-4'/>
            </div>
            <div>
                <h3 className='text-red-500 font-semibold text-xl'>About us</h3>
                <h1 className='text-3xl sm:text-4xl font-bold py-4'>We are qualified & of experience in this field.</h1>
                <p className='font-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='font-light pt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-secondary mt-4'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;