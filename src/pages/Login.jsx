import React from "react";
import { useContext } from "react";
import CustomBtn from "../components/UI/button/CustomBtn";
import CustomInput from "../components/UI/input/CustomInput";
import { AuthContext } from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true');
    }


    return (
        <div>
            <h1>
                auth page
            </h1>
            <form onSubmit={login}>
                <CustomInput type="text" placeholder="login"/>
                <CustomInput type="password" placeholder="pass"/>
                <CustomBtn>
                    log in
                </CustomBtn>
            </form>
        </div>
    )
}

export default Login;