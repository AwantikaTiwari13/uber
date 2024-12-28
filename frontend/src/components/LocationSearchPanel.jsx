import React from 'react'

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanelOpen,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    console.log("Selected suggestion:", suggestion); 
    if (activeField === "pickup") {
      setPickup(suggestion.description || suggestion.structured_formatting?.main_text || "Unknown Place");
    } else if (activeField === "destination") {
      setDestination(suggestion.description || suggestion.structured_formatting?.main_text || "Unknown Place");
    }
    // Close the panel and open the vehicle panel if necessary
    // setPanelOpen(false);
    // setVehiclePanelOpen(true);
  };

  return (
    <div>
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">
            {elem.description || elem.structured_formatting?.main_text || "Unknown Place"}
          </h4>
        </div>
      ))}
    </div>
  );
};


export default LocationSearchPanel