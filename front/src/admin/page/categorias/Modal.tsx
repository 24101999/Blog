import React, { useState } from "react";
import styles from "./modal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
type Props = {
    md?: string;
    cl?: () => void;
    del?: () => void;
};

const Modal = ({ md, cl, del }: Props) => {
    return (
        <div className={md}>
            <button onClick={cl} className={styles.close}>
                <AiOutlineCloseCircle />
            </button>
            <div className="">
                <h1>Tem certeza</h1>
            </div>
            <div className={styles.buttons}>
                <button className={styles.btS} onClick={del}>
                    Sim
                </button>
                <button className={styles.btN} onClick={cl}>
                    Não
                </button>
            </div>
        </div>
    );
};

export default Modal;
