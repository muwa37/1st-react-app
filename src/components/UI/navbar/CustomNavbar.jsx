import React from "react";
import {Link} from "react-router-dom";

const CustomNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
            <Link to="/about">about</Link>
            <Link to="/posts">posts</Link>

            </div>
        </div>

    );
};

export default CustomNavbar;