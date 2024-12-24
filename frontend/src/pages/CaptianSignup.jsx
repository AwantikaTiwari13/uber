import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CaptainSignup = () => {
     const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [captainData, setCaptainData] = useState({});
     
     
        const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password
        })
        console.log(captainData);
        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
      };  
    
    
    return (
        <div className="py-5 px-5 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-20 mb-3"
         src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
           

          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="test"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="test"
              placeholder="lastname"
              value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            base
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>{" "}
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
    );
};

export default CaptainSignup;