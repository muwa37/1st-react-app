import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Route, Routes, Navigate} from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route 
                path='/about'
                element={<About/>}
            />
            <Route 
                exact path="/posts"
                element={<Posts/>}
            />
            <Route
                exact path="posts/:id"
                element={<PostIdPage/>}
            />
            <Route
                path=""
                element={
                    <Navigate replace to = "/posts"/>
                }
            />
            <Route
                path="*"
                element={<Error/>}
            />
        </Routes>
    );
};

export default AppRouter;