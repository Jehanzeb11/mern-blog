import React from "react";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const ProtectedRoutes = ({children}) => {
const {user} = useSelector(state => state.auth)

  return user ? children : <Login/>
};

export default ProtectedRoutes;