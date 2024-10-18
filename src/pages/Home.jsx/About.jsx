import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
   return (
      <div className='flex justify-between gap-x-16  my-24'>
         <div className='relative'>
            <img src={person} alt="person" className='w-full' />
            <img src={parts} alt=""  className='absolute w-1/2 -bottom-6 border-4 rounded-xl border-white -right-10'/>
         </div>
         <div className='space-y-6'>
            <h4 className='text-[#f83b26] font-semibold text-lg'>About Us</h4>
            <h1 className='text-2xl font-semibold sm:text-4xl'>We are qualified & of experience in this field</h1>
            <p className='text-[#827e7e]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='text-[#827e7e]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn_1">Get More Info</button>
         </div>
      </div>
   );
};

export default About;