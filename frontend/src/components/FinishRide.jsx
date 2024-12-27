import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="w-full bg-white z-10 p-3 shadow-md flex flex-col justify-center items-center">
        <h5
          className="cursor-pointer"
          onClick={() => {
            props.setFinishRidePanel(false)
          }}
        >
          <i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i>
        </h5>
        <h2 className="text-2xl font-bold text-gray-600 mt-1">
          Finish this ride
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {/* Rider Info */}
        <div className="flex items-center p-3 bg-yellow-200 rounded-lg mt-4 justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z3Hapf_hfCOHjhKeTp8XDWzMMhzjG8pVjQ&s"
              alt=""
            />
            <h2 className="text-lg font-medium">Awantika</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2km</h5>
        </div>

        {/* Ride Details */}
        <div className="mt-5">
          <div className="flex items-center gap-5 p-3 border-b">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-wallet-3-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Pay in cash</p>
            </div>
          </div>
        </div>

        {/* Complete Ride Button */}
        <div className="mt-6">
          <Link
            to="/captain-home"
            className="w-full flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className=" mt-10 text-xs">*Click on Finish Ride button if the payment is done*</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
