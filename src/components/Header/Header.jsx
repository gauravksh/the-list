import React, { useState, useContext } from "react";
import Logo from "../Logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../../fire";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [showLinks, setshowLinks] = useState(false);
  // const [signinIsOpen, setsigninIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const handleSignout = async () => {
    await signOut(auth);
    // console.log(auth);
    navigate("/");
  };
  return (
    <>
      <div className="header_nav" onClick={() => window.scroll(0, 0)}>
        <nav className="navbar">
          <div className="NavLogo">
            <Logo />
          </div>
          {user ? (
            <>
              <div className="links">
                <Link to="/profile">
                  <span className="links_profile">Profile</span>
                </Link>
                {/* <button className="logoutButton" onClick={handleSignout}> */}
                <span className="links_logout" onClick={handleSignout}>
                  Logout
                </span>
                {/* </button> */}
                <div className="hamburger">
                  <a href="#" onClick={() => setshowLinks(!showLinks)}>
                    <GiHamburgerMenu
                      style={{ width: "25px", height: "25px" }}
                    />
                  </a>
                </div>
              </div>
              <div className={showLinks ? "mob_links" : "mob_displayoff"}>
                <Link to="/profile">
                  <span
                    className="mob_profile"
                    onClick={() => setshowLinks(!showLinks)}
                  >
                    Profile
                  </span>
                </Link>
                {/* <button className="logoutButton" onClick={handleSignout}> */}
                <span
                  className="mob_logout"
                  onClick={() => {
                    handleSignout();
                    setshowLinks(!showLinks);
                  }}
                >
                  Logout
                </span>
                {/* </button> */}
              </div>
            </>
          ) : (
            <>
              <div className="links">
                <div className="links_register">
                  <Link to="/register">Register</Link>
                </div>
                <div className="links_signin">
                  <Link to="/signin">Sign In</Link>
                </div>
                <div className="hamburger">
                  <a href="#" onClick={() => setshowLinks(!showLinks)}>
                    <GiHamburgerMenu
                      style={{ width: "25px", height: "25px" }}
                    />
                  </a>
                </div>
              </div>

              <div className={showLinks ? "mob_links" : "mob_displayoff"}>
                <div
                  className="mob_reg"
                  onClick={() => setshowLinks(!showLinks)}
                >
                  <Link to="/register">Register</Link>
                </div>
                <div
                  className="mob_signin"
                  onClick={() => setshowLinks(!showLinks)}
                >
                  <Link to="/signin">Sign In</Link>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
};
