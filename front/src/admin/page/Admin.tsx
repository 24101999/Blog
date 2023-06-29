import React, { useState } from "react";
import styles from "./Admin.module.css";
import PostAdmin from "./post/PostAdmin";
import CategoriaAdmin from "./categorias/CategoriaAdmin";
type Props = {};

const Admin = (props: Props) => {
    const [Tipo, setTipo] = useState(<PostAdmin />);

    const posts = () => {
        setTipo(<PostAdmin />);
    };
    const categorias = () => {
        setTipo(<CategoriaAdmin />);
    };

    return (
        <div className={styles.admin}>
            <nav>
                <button onClick={posts}>POSTS</button>
                <button onClick={categorias}>CATEGORIAS</button>
            </nav>
            <div className="">{Tipo}</div>
        </div>
    );
};

export default Admin;
