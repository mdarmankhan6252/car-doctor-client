import TextArea from "../../components/TextArea";
import About from "./About";
import Banner from "./Banner";
import Details from "./Details";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
   return (
      <div>
         <Banner />
         <About />
         <TextArea category="Services" title="Our Services Area" desc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
         <Services />
         <Details />
         <TextArea category="Popular Products" title="Browse Our Products" desc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
         <Products />
         <div className="text-center mb-20">
            <button className="btn_1">More Products</button>
         </div>
         <TextArea category="Team" title="Meet Our Team" desc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
         <Team/>
         <TextArea category="Core Features" title="Why Choose Us" desc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
         <Features/>
         <TextArea category="Testimonial" title="What Customer Says" desc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
         <Testimonial/>
      </div>
   );
};

export default Home;