import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api.js";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";

//custom frontend protection to prevent people navigating to pages they don't have access to.
function ProtectedRoute({ children }) {
    const [isAuthorized, setisAuthorized] = useState(null);
    
    useEffect(() => {
        auth().catch(() => setisAuthorized(false))
    }, [])

  // refreshes the access token automatically
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setisAuthorized(true);
      } else {
        setisAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setisAuthorized(false);
    }
  };

  //checks if we need to refresh the token or not
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setisAuthorized(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000; //getting todays date is seconds not milliseconds

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setisAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;