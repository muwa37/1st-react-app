import React from "react";
import Error from "../pages/Error";
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/route";
import { useContext } from "react";
import { AuthContext } from "../context";
import CustomLoader from "./UI/loader/CustomLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <CustomLoader/>
    }
    
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route => 
                <Route 
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Route
                path="*"
                element={
                    <Navigate replace to = "/posts"/>
                }
            />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route => 
                <Route 
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Route
                path="*"
                element={
                    <Navigate replace to = "/login"/>
                }
            />
        </Routes>
    );
};

export default AppRouter;