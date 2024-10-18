
const TextArea = ({category, title, desc}) => {
   return (
      <div className="text-center space-y-4">
         <h4 className="sm:text-xl font-semibold text-[#f83b26] uppercase">{category}</h4>  
         <h2 className="text-2xl sm:text-4xl font-semibold ">{title}</h2>    
         <p className="text-[#827e7e] max-w-xl mx-auto">{desc}</p>   
      </div>
   );
};

export default TextArea;