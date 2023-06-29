import React from "react";
import styles from "./Footer.module.css";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineWhatsApp,
} from "react-icons/ai";
type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.infos}>
                <div className={styles.contato}>
                    <h1>CONTATO</h1>
                </div>
                <div className={styles.links}>
                    <a
                        href="https://www.linkedin.com/in/henrique-da-silva-costa-7172521a2/"
                        target="target_blank"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/24101999" target="target_blank">
                        <AiFillGithub />
                    </a>
                    <a href="https://wa.me/5544997070974" target="target_blank">
                        <AiOutlineWhatsApp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
