import { VscGithubInverted } from 'react-icons/vsc';
import img_1 from '../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';


const Login = () => {
   const navigate = useNavigate()
   const { loginUser, googleSignIn } = useContext(AuthContext)
   const location = useLocation();
   // console.log(location);


   const handleLoginUser = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      loginUser(email, password)
         .then(() => {
           
            const user = {email}
            axios.post('http://localhost:5000/jwt', user,{
               withCredentials:true
            })
            .then(res =>{
               // console.log(res.data);
               if(res.data.success){
                  navigate(location?.state ? location?.state : '/' )
               }
            })
            

            Swal.fire({
               icon: "success",
               title: "Welcome",
               showConfirmButton: false,
               timer: 1500
            });
         })
         .then(() => {
            // console.log(err);
         })

   }

   const handleGoogleLogin = () => {
      googleSignIn()
      navigate(location?.state ? location?.state : '/')
      Swal.fire({
         icon: "success",
         title: "Welcome",
         showConfirmButton: false,
         timer: 1500
      });
   }

   return (
      <div className='flex items-center *:basis-1/2 gap-y-10 py-20 sm:flex-row flex-col'>
         <div>
            <img src={img_1} alt="" className='w-[90%]' />
         </div>
         <form onSubmit={handleLoginUser} className='border p-10 shadow-[0px_0px_2px_0px] shadow-gray-500 *:w-full'>
            <h2 className='text-center pb-8 text-2xl font-semibold sm:text-4xl'>Sign In</h2>
            <label className='font-semibold pb-1'>Email</label>
            <input type="email" name="email" placeholder='Your Email' className='border p-2 mb-6 ' />
            <label className='font-semibold pb-1'>Password</label>
            <input type="password" name="password" placeholder='Your password' className='border p-2 mb-6 ' />
            <input type="submit" value="Sign In" className='btn_1 cursor-pointer' />
            <p className='text-center py-3 font-semibold text-gray-600'>Or Sign Up with</p>
            <div className='flex items-center justify-center text-3xl space-x-5 *:cursor-pointer'>
               <FcGoogle onClick={handleGoogleLogin} className='text-4xl' />
               <VscGithubInverted />
            </div>
            <p className='text-[14px] pt-4 text-center'>Are You New Here ? <Link to='/register' className='font-semibold text-[#FF3811] hover:border-b-2 border-red-400'>Register</Link></p>
         </form>
      </div>
   );
};

export default Login;