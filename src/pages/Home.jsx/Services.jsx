import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../../components/ServiceCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Services = () => {
   const axios = useAxiosSecure();
   const { data: services = [] } = useQuery({
      queryKey: ['services'],
      queryFn: async () => {
         const { data } = await axios.get('/services');
         return data;
      }
   })

   console.log(services);

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-24 gap-8">
         {
            services.map(service => <ServiceCard key={service._id} service={service} />)
         }
      </div>
   );
};

export default Services;