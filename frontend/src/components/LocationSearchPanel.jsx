import React from "react";

const LocationSearchPanel = (props) => {
  //  sample array for location
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "22B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "21B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "20B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "19B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl  items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center w-12 rounded-full">
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
