import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userLogout = (navigate) => {
  const token = localStorage.getItem("token");

  axios
    .get(`${import.meta.env.VITE_API_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        useNavigate("/login");
      }
    })
    .catch((error) => {
      console.error("Logout failed", error);
    });

  return <div>userLogout</div>;
};

export default userLogout;
