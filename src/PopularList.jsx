import PopularProperties from "./PopularProperties";

function PopularList() {
  return (
    <div className="flex flex-col justify-center items-start krona-one-regular mb-24">
      <h2 className="ml-52 mt-40 mb-8 text-lg" >Popular Properties</h2>
      <div className="property-list flex flex-wrap justify-center">
        {PopularProperties.map((property, index) => (
          <div key={index} className="property-card bg-white border border-slate-400 w-96 h-[450px] px-6 flex flex-col justify-center items-start  pt-6 mb-10 mx-5 text-xs">
            <img src={property.imageUrl} alt={property.name} className="w-full h-48 object-cover"/>
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularList;
