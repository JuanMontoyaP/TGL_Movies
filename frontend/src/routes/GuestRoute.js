import React from 'react'
import {  Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function GuestRoute({ children }) {
  const { isUserLogged } = useUserContext();

  return !isUserLogged ? children : <Navigate to="/" />;
}
