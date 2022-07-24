import React from 'react'
import {  Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useUserContext();

  return currentUser ? children : <Navigate to="/login" />;
}
