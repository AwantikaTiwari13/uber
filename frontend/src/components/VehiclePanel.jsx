import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setVehiclePanelOpen(false);
          props.setPanelOpen(true);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('car')
      }} className="flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify between">
        <img
          className="h-12 "
          src="https://purepng.com/public/uploads/large/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486181k3is7.png"
          alt=""
        />
        <div className=" ml-3 w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.car}</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('moto')
      }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify between">
        <img
          className="h-12 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
          alt=""
        />
        <div className=" ml-3 w-1/2">
          <h4 className="font-medium text-lg">
            Moto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable bike rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.moto}</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('auto')
      }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify between">
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" ml-3 w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
