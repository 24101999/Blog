import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Destaque from "./Destaque/Destaque";
import CriarPost from "./criarPost/CriarPost";
import Categoria from "./categorias/Categoria";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { RiAdminFill } from "react-icons/ri";
type Props = {};

const Home = (props: Props) => {
    const nav = useNavigate();
    return (
        <div className={styles.home}>
            <button onClick={() => nav("/admin")} className={styles.admin}>
                <div className={styles.adm}>
                    <RiAdminFill />
                    <p>Admin</p>
                </div>
            </button>
            <Header />
            <Destaque />
            <CriarPost />
            <Categoria />
            <Footer />
        </div>
    );
};

export default Home;
