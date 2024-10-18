import axios from "axios";


const AxiosSecure = axios.create({
   baseURL:'http://localhost:5000',
   withCredentials:true
})

const useAxiosSecure = () => {
   return AxiosSecure;
};

export default useAxiosSecure;