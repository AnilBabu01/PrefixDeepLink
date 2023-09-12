import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/lo.jpeg";

const Navbar = ({ showRoomOptions }) => {
  const [isMobile, setisMobile] = useState(false);
  const [profileimg, setprofileimg] = useState("");

  useEffect(() => {}, [isMobile, profileimg]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <nav className={style.navbar}>
          <div className={style.logo}>
            <img src={logo} alt=" Logo" />
            <p className={style.logotext}>Royal <br></br>$weeps</p>
          </div>

          <ul
            className={isMobile ? style.mobilelinks : style.navlinks}
            onClick={() => setisMobile(false)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin-panel/LikePlay"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Link 2 Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin-panel/Payment"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Payment
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Offer
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={style.borderlink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <i
            style={{ marginRight: "20px" }}
            onClick={() => setisMobile(!isMobile)}
            className={style.mobileMenuIcon}
          >
            {isMobile ? (
              <>
                <div className={style.showburinphone}>
                  <CloseIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={style.showburinphone}>
                  <MenuIcon
                    style={{ height: "40px" }}
                    className={style.burger}
                  />
                </div>
              </>
            )}
          </i>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
