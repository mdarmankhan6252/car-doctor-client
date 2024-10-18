import { VscGithubInverted } from 'react-icons/vsc';
import img_1 from '../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
   const { createUser, setUser,logOut, updateUserProfile, googleSignIn } = useContext(AuthContext)
   const navigate = useNavigate()

   const handleCreateUser = e =>{
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email, password)
      .then(result =>{
         // console.log(result.user);
         updateUserProfile(name)
         .then(() =>{
            setUser(result.user)
            navigate('/login')
            logOut()
         })
      })
      .then(err =>{
         console.log(err);
      })
      
   }

   const handleGoogleLogin = () =>{
      googleSignIn()
      navigate('/')
   }

   return (
      <div className='flex items-center *:basis-1/2 gap-y-10 py-20 sm:flex-row flex-col'>
         <div>
            <img src={img_1} alt="" className='w-[90%]' />
         </div>
         <form onSubmit={handleCreateUser} className='border p-10 shadow-[0px_0px_2px_0px] shadow-gray-500 *:w-full'>
            <h2 className='text-center pb-8 text-2xl font-semibold sm:text-4xl'>Sign Up</h2>
            <label className='font-semibold pb-1'>Name</label>
            <input type="text" name="name" placeholder='Your Name' className='border p-2 mb-6 ' required/>
            <label className='font-semibold pb-1'>Email</label>
            <input type="email" name="email" placeholder='Your Email' className='border p-2 mb-6 ' required/>
            <label className='font-semibold pb-1'>Password</label>
            <input type="password" name="password" placeholder='Your password' className='border p-2 mb-6 ' />
            <input type="submit" value="Sign Up" className='btn_1 cursor-pointer' required/>
            <p className='text-center py-3 font-semibold text-gray-600'>Or Sign Up with</p>
            <div className='flex items-center justify-center text-3xl space-x-5 *:cursor-pointer'>
               <FcGoogle onClick={handleGoogleLogin} className='text-4xl' />
               <VscGithubInverted />
            </div>
            <p className='text-[14px] pt-4 text-center'>Already Have An Account ? <Link to='/login' className='font-semibold text-[#FF3811] hover:border-b-2 border-red-400'>Login</Link></p>
         </form>
      </div>
   );
};

export default Register;