import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import { IoPower } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import "./OnOff.css";

export default function OnOff() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log("An error happened.", error.message);
      });
  };

  return (
    <div className="row">
      <div className="col-6">
        <NavLink className="nav-item logo-container" to="/">
          <div className="logofor-pages">GF</div>
        </NavLink>
      </div>
      <div className="col-6 on-off-container">
        <IoPower className="on-off" onClick={logout} />
      </div>
    </div>
  );
}
