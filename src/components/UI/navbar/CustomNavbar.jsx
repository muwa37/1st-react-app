import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../../context";
import CustomBtn from "../button/CustomBtn";

const CustomNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
            <CustomBtn onClick={logout}>
                log out
            </CustomBtn>
            <div className="navbar__links">
                <Link className="navbar__link" to="/about">about</Link>
                <Link className="navbar__link" to="/posts">posts</Link>
            </div>
        </div>

    );
};

export default CustomNavbar;