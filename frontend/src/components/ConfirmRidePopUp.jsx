import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()
  
  const submitHander = async (e) => {
    e.preventDefault()

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
        params: {
            rideId: props.ride._id,
            otp: otp
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (response.status === 200) {
        props.setConfirmRidePopupPanel(false)
        props.setRidePopupPanel(false)
        navigate('/captain-riding', { state: { ride: props.ride } })
    }


}
  
    return (
    <div className="h-screen">
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
          props.setRidePopupPanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5 text-gray-600">
        Confirming Ride...
      </h2>
      <div className="flex items-center p-3 bg-yellow-200 rounded-lg mt-4 justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z3Hapf_hfCOHjhKeTp8XDWzMMhzjG8pVjQ&s"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className="text-lg font-semibold ">2.2km</h5>
      </div>
      <div className="flex justify-between gap-2 flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                pickup location
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">
               drop location
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-wallet-3-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Pay in cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form
            onSubmit={submitHander}
          >
            <input
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
              className="bg-[#eee]  px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter OTP"
            />
            <button
              
              className="w-full flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg mt-5"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full bg-red-600 text-white font-semibold p-3 rounded-lg mt-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
