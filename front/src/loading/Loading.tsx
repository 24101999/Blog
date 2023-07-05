import React from "react";
import styles from "./Loading.module.css";
import img from "../Gear-0.2s-200px.svg";
type Props = {};

const Loading = (props: Props) => {
    return (
        <div className={styles.loading}>
            <img src={img} alt="" />
        </div>
    );
};

export default Loading;
