import React, { useContext } from "react";
import "./Userhome.css";
import { AuthContext } from "../context/auth";
import Loghome from "../LoggedHome/Loghome";
import Home from "../Home/Home";

const Userhome = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <>
      <Loghome />{" "}
    </>
  ) : (
    <Home />
  );
};

export default Userhome;
