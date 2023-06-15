import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

import sun from "../../img/icons/sun.svg"
import moon from "../../img/icons/moon.svg"

function Navbar() {

    const activLink = "nav-list__link nav-list__link--active"
    const defaultLink = "nav-list__link"

    return <div>
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <div className="logo"><strong>Freelancer</strong> portfolio</div>

                    {/* <button className="dark-mode-btn">
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button> */}

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/"
                                className={({ isActive }) => isActive ? activLink : defaultLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts"
                                className={({ isActive }) => isActive ? activLink : defaultLink}>
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects"
                                className={({ isActive }) => isActive ? activLink : defaultLink}>
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>;
}

export default Navbar;
