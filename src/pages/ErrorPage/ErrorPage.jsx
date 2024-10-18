import Nav from "../../components/Nav";
import error_img from '../../assets/images/error.png'
const ErrorPage = () => {
   return (
      <div className="max-w-7xl mx-auto px-3">
         <Nav/>
         <div className="flex items-center justify-center pt-[7%]">
            <img src={error_img} alt="" className="w-2/3" />
         </div>
         
      </div>
   );
};

export default ErrorPage;