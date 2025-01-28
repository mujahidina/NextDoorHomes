import { GiBathtub } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import PopularProperties from "./PopularProperties";
import { BsDoorOpen } from "react-icons/bs";


function PopularList() {
  return (
    <div className="flex flex-col justify-center items-start krona-one-regular mb-24">
      <h2 className="ml-52 mt-40 mb-8 text-lg" >Popular Properties</h2>
      <div className="property-list flex flex-wrap justify-center">
        {PopularProperties.map((property, index) => (
          <div key={index} className="property-card bg-white text-gray-400 border border-slate-400 w-96 h-[370px] px-6 flex flex-col items-start  pt-6 mb-10 mx-5 text-xs">
            <img src={property.imageUrl} alt={property.name} className="w-full h-52 mb-6 object-cover"/>
            <h3 className="text-lg text-gray-500">{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <div className="flex flex-row w-52 h-8 items-center mt-2 border border-gray-400 pl-5"> 
               <GiBathtub size={20} className="mr-2"/>
               <p className="mr-5">{property.bathrooms}</p>
               <TbToolsKitchen2 size={20} className="mr-2"/>
               <p className="mr-5">{property.kitchen}</p>
               <BsDoorOpen size={20} className="mr-2"/>
               <p>{property.rooms}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularList;
