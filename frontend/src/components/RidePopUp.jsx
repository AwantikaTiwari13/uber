import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">New Ride Available!</h2>
        <div className="flex items-center p-3 bg-yellow-200 rounded-lg mt-4 justify-between">
            <div className="flex items-center gap-3">
                <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z3Hapf_hfCOHjhKeTp8XDWzMMhzjG8pVjQ&s" alt="" />
                <h2 className="text-lg font-medium">Awantika</h2>
            </div>
            <h5 className="text-lg font-semibold ">2.2km</h5>
        </div>
      <div className="flex justify-between gap-2 flex-col items-center">
        
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-wallet-3-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Pay in cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-5">
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className=" bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg "
        >
         Ignore
        </button>
        
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
          }}
          className=" bg-green-600 text-white font-semibold p-3  px-10 rounded-lg "
        >
          Accept
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
