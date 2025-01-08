import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation()
  const rideData = location.state?.ride
 

  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        translateY: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        translateY: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen relative">
      {/* Header */}
      <div className="fixed p-3 top-0 flex items-center justify-between w-full z-20">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Map Section */}
      <div className="h-3/4 w-full relative">
        <LiveTracking ride={rideData} />
      </div>

      {/* Yellow Section */}
      <div
        className="h-1/4 flex flex-col justify-center items-center bg-yellow-200 rounded-t-3xl shadow-lg absolute bottom-0 w-full px-6 py-5"
        onClick={() => setFinishRidePanel(true)}
      >
        {/* Upward Arrow Icon */}
        <div className="absolute -top-5 bg-yellow-200 h-10 w-10 flex items-center justify-center rounded-full shadow-md">
          <i className="ri-arrow-up-s-line text-3xl text-black"></i>
        </div>

        {/* Container to align both 4km text and button */}
        <div className="flex justify-between items-center w-full max-w-[400px] gap-3 mt-3">
          {/* Grayish Div for "4 km" Text */}
          <div className="bg-gray-300 text-center w-[48%] p-3 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-black">4 km away</h4>
          </div>

          {/* "Complete Ride" Button */}
          <button className="bg-green-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out w-[48%] flex items-center justify-center">
            Complete
          </button>
        </div>
      </div>

      {/* Finish Ride Panel */}
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-30 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 shadow-xl"
      >
        <FinishRide 
        ride={rideData}
        setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
