import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyCheckouts = () => {

   const { user } = useContext(AuthContext)
   const [checkouts, setCheckouts] = useState([])
   const AxiosSecure = useAxiosSecure()

   const url = `/checkouts?email=${user?.email}`

   useEffect(() => {
      AxiosSecure.get(url)
      .then(res =>{
         setCheckouts(res.data)
      })
   }, [url, AxiosSecure])



   const handleDelete = id => {
      Swal.fire({
         title: "Are you sure?",
         text: "It will be deleted forever!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/checkouts/${id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "User order is deleted",
                        icon: "success"
                     });

                     const remaining = checkouts.filter(checkout => checkout._id !== id)
                     setCheckouts(remaining)

                  }
               })
         }
      });
   }

   const handleUpdateStatus = id => {

      fetch(`http://localhost:5000/checkouts/${id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ status: 'confirm' })
      })
         .then(res => res.json())
         .then(() => {
            // console.log(data)
            const remaining = checkouts.filter(checkout => checkout._id !== id)
            const updated = checkouts.find(checkout => checkout._id === id);
            updated.status = 'confirm'
            const newCheckout = [updated, ...remaining]
            setCheckouts(newCheckout)

         })


   }

   return (
      <div>
         <div className=" py-12">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">MY Checkouts : <span>{checkouts.length}</span></h2>
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs border">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                  </colgroup>
                  <thead className="bg-slate-100">
                     <tr className="text-left">
                        <th className="p-3">SL</th>
                        <th className="p-3">Image</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Price</th>
                        <th className="p-3 pl-16">Id</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        checkouts.map((checkout, i) => <tr key={checkout._id} className="border-b border-opacity-20">
                           <td className="p-3">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-3">
                              <img src={checkout.img} alt="" className="w-12" />
                           </td>
                           <td className="p-3">
                              <p>{checkout.customerName}</p>
                           </td>
                           <td className="p-3">
                              <p>{checkout.phone}</p>
                           </td>
                           <td className="p-3">
                              <p>{checkout.date}</p>
                           </td>
                           <td className="p-3 ">
                              <p>{checkout.price}</p>
                           </td>
                           <td className="p-3 ">
                              <p>{checkout._id}</p>
                           </td>
                           <td className="p-3">
                              {
                                 checkout.status === 'confirm' ? <span className="p-3  font-semibold text-green-500 cursor-pointer">
                                    Confirm
                                 </span> : <span onClick={() => handleUpdateStatus(checkout._id)} className="p-3  font-semibold text-blue-500 cursor-pointer">
                                    Pending
                                 </span>
                              }
                           </td>

                           <td onClick={() => handleDelete(checkout._id)} className="p-3 pl-7 font-semibold text-red-500 cursor-pointer">
                              X
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyCheckouts;