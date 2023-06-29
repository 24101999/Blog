import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CriarPost.module.css";
type Props = {};

const CriarPost = (props: Props) => {
    const nav = useNavigate();
    return (
        <div className={styles.criePost}>
            <div className={styles.post}>
                <h3>CRIE SEU POST</h3>
                <button onClick={() => nav("/insert")}>POSTAR</button>
            </div>
        </div>
    );
};

export default CriarPost;
