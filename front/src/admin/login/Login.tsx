import React, { useState, useEffect, ChangeEvent, useContext } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
type Props = {};

const Login = (props: Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const nav = useNavigate();
    const { key }: any = useContext(LoginContext);

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/login", { email, password })
            .then((res) => {
                sessionStorage.setItem("val", res.data.access_token);
                nav("/admin");
            })
            .catch((err) => {
                console.log(err);
                return;
            });
    };

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <p>{key}</p>
            <form onSubmit={sub}>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            <Link to="/login/cadastro">
                <p>Cadastre-se</p>
            </Link>
        </div>
    );
};

export default Login;
