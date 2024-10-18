import { useLoaderData, useNavigate } from "react-router-dom";
import SharedBanner from "./SharedBanner";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {

   const service = useLoaderData();
   const { title, price, _id, img } = service;
   const { user } = useContext(AuthContext)
   const navigate = useNavigate()

   const handleCheckOutService = e => {
      
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const date = form.date.value;
      const message = form.message.value;
      const checkout = {
         customerName: name,
         email,
         phone,
         img,
         date,
         price,
         message,
         service: _id,
      }

      fetch('http://localhost:5000/checkouts', {
         method:'POST', 
         headers:{
            'content-type' : 'application/json'
         },
         body : JSON.stringify(checkout)
      })
         .then(res => res.json())
         .then(data => {
            if (data.insertedId) {
               Swal.fire({
                  icon: "success",
                  title: "You have ordered successfully!",
                  showConfirmButton: false,
                  timer: 1500
               });
               form.reset()
               navigate('/myCheckout')
            }
         })

   }
   return (
      <div>
         <SharedBanner title="Check Out Page" imgURL="https://img.freepik.com/premium-photo/two-men-working-car-garage-with-hood-up_1306097-84039.jpg?ga=GA1.1.1405054310.1702914826&semt=ais_hybrid-rr-similar" />

         <h2 className="mt-20 text-center font-semibold text-xl sm:text-3xl">Service Name : <span className="text-[#ff3811]">{title}</span></h2>
         <p className="font-semibold -mb-4">Price : <span className="text-[#ff3811]">{price}</span></p>

         <form onSubmit={handleCheckOutService} className="w-full bg-slate-100 my-20 *:w-full py-20 px-12 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 *:border *:p-2">
               <input type="text" name="name" placeholder="Your Name" required defaultValue={user?.displayName} />
               <input type="email" name="email" placeholder="Your Email" required defaultValue={user?.email} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 *:border *:p-2">
               <input type="phone" name="phone" placeholder="Your Phone" required />
               <input type="date" name="date" placeholder="Date" required />
            </div>
            <textarea name="message" placeholder="Your Message" rows={5} className="p-2" required></textarea>
            <input type="submit" value="Order confirm" className="btn_1 btn_3" />
         </form>
      </div>
   );
};

export default CheckOut;