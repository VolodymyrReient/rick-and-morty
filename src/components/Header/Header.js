import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
    const handleChange = () => {
        if (window.localStorage.getItem("theme") === "dark") {
            window.localStorage.setItem("theme", "light");
        } else {
            window.localStorage.setItem("theme", "dark");
        }
        window.location.reload();
    };

    return (
        <nav className="nav-bar">
            <Link to="/" className="link">
                Main-page
            </Link>
            <Link to="/create" className="link">
                Create Hero
            </Link>
            <label className="switch">
                <input
                    type="checkbox"
                    name="theme"
                    onChange={handleChange}
                    checked={window.localStorage.getItem("theme") === "dark"}
                />
                <span className="slider round"></span>
            </label>
        </nav>
    );
}

export default Header;
