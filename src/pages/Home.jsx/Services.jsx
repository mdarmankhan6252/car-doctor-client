import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Services = () => {
   const [services, setServices] = useState([])
   const AxiosSecure = useAxiosSecure()
   useEffect(() =>{
      AxiosSecure.get('/services')      
      .then(res =>{
         setServices(res.data)
      })
   },[AxiosSecure])
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-24 gap-8">
         {
            services.map(service => <ServiceCard key={service._id} service={service}/>)
         }    
      </div>
   );
};

export default Services;