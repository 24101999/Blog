import React, { useState, useEffect, ChangeEvent, useContext } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
type Props = {};

const Login = (props: Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    const [msgInput, setMsgInput] = useState<string>("");
    const nav = useNavigate();
    const { key, setKey }: any = useContext(LoginContext);

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setMsgInput("campo vazio");
            return;
        }
        axios
            .post("http://localhost:8000/login", { email, password })
            .then((res) => {
                sessionStorage.setItem("val", res.data.access_token);
                setKey(sessionStorage.getItem("val"));
                nav("/admin");
            })
            .catch((err) => {
                console.log(err);
                setMsg("Email ou senha esta incorreto");
                return;
            });
    };

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <h2 style={{ color: "#fff" }}>
                <strong>{msg}</strong>
            </h2>
            <form onSubmit={sub}>
                <label>
                    <span>E-mail</span>
                    <input
                        placeholder={msgInput}
                        type="email"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        placeholder={msgInput}
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
