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
import CategoriaEdit from "./admin/page/categorias/CategoriaEdit";
import Login from "./admin/login/Login";
import Cadastro from "./admin/login/Cadastro";
import LoginContext from "./contexts/LoginContext";
function App() {
    const [key, setKey] = useState<string>("");

    return (
        <div className="App">
            <LoginContext.Provider value={{ key, setKey }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/insert" element={<Insert />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/post/categoria/:id" element={<Home />} />
                        <Route path="/post/:id" element={<Home />} />
                        <Route path="/post/unico/:id" element={<Post />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/post/edit/:id" element={<EditPost />} />
                        <Route
                            path="/categoria/edit/:id"
                            element={<CategoriaEdit />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/login/cadastro" element={<Cadastro />} />
                    </Routes>
                </BrowserRouter>
            </LoginContext.Provider>
        </div>
    );
}

export default App;
