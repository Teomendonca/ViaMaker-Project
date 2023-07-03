import React from "react";
import { Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

export default function ApprRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<InitialPage />}>
            </Route>
            <Route
                path="/posts"
                element={<Posts />}>
            </Route>
            <Route
                path="/user"
                element={<Users />}>
            </Route>
        </Routes>
    );
}