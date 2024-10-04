import { NavLink } from "react-router-dom";
import OnOff from "./OnOff";
import TitleBox from "./TitleBox";
import findUser from "../UseFindUser";

import "./Navbar.css";

const Navbar = () => {
  const { user } = findUser()
  return (
    <>
      <OnOff />
      <div className="container-nav">
        <ul className="nav">
          <li className="nav-link">
            <NavLink className="nav-text bg-info" to="/enterTips">
              enter Tips
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="nav-text bg-info" to="/dashboard">
              dashboard
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="nav-text bg-info" to="/profile">
              profile
            </NavLink>
          </li>
        </ul>
      </div>
      <TitleBox firstname={user.displayName} />
    </>
  );
};
export default Navbar;
