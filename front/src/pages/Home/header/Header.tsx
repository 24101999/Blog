import React from "react";
import styles from "./Header.module.css";
type Props = {};

const Header = (props: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.titulo}>
                <h1>DEV BLOG</h1>
            </div>
        </header>
    );
};

export default Header;
