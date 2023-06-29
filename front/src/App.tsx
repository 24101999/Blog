import React, { ChangeEvent, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insert from "./admin/Insert";
import Home from "./pages/Home/Home";
import Post from "./pages/post/Post";
import Admin from "./admin/page/Admin";
import EditPost from "./admin/page/post/EditPost";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/insert" element={<Insert />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/post/categoria/:id" element={<Home />} />
                    <Route path="/post/:id" element={<Home />} />
                    <Route path="/post/unico/:id" element={<Post />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/post/edit/:id" element={<EditPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
