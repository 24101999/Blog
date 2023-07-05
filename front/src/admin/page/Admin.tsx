import React, { useState, useContext, useEffect } from "react";
import styles from "./Admin.module.css";
import PostAdmin from "./post/PostAdmin";
import CategoriaAdmin from "./categorias/CategoriaAdmin";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading/Loading";
import LoginContext from "../../contexts/LoginContext";
type Props = {};

const Admin = (props: Props) => {
    const [Tipo, setTipo] = useState(<PostAdmin />);

    const { key }: any = useContext(LoginContext);

    useEffect(() => {
        if (key === sessionStorage.getItem("val")) {
            return;
        } else {
        }
    }, []);

    const nav = useNavigate();
    const posts = () => {
        setTipo(<PostAdmin />);
    };
    const categorias = () => {
        setTipo(<CategoriaAdmin />);
    };

    return (
        <div className={styles.admin}>
            {/* <Loading /> */}
            <button className={styles.home} onClick={() => nav("/")}>
                <AiFillHome color="blue" />
            </button>
            <nav>
                <button onClick={posts}>POSTS</button>
                <button onClick={categorias}>CATEGORIAS</button>
            </nav>
            <div className="">{Tipo}</div>
        </div>
    );
};

export default Admin;
