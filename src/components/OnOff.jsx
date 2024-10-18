import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

import { IoPower } from "react-icons/io5";

import Error from "./Error";

import "./OnOff.css";

export default function OnOff() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError("An error happened.");
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="row g-0">
      <div className="col-6">
        <NavLink className="nav-item logo-container" to="/">
          <div className="logofor-pages">GF</div>
        </NavLink>
      </div>
      <div className="col-6 on-off-container">
        <IoPower className="on-off" onClick={logout} />
      </div>
      {error && <Error  error={error} />}
    </div>
  );
}
