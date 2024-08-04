import Service from "./Service";
import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center px-3 space-y-4">
                <h3 className="text-red-500 font-semibold text-xl">Services</h3>
                <h1 className="font-semibold text-4xl">Our Service Area</h1>
                <p className="font-light">the majority have suffered alteration in some form, by injected humour,<br/>or random words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;