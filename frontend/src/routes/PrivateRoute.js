import React from 'react'
import {  Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function PrivateRoute({ children }) {
  const { isUserLogged } = useUserContext();

  return isUserLogged ? children : <Navigate to="/login" />;
}
