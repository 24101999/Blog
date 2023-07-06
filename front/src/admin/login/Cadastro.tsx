import React, { useState, ChangeEvent } from "react";
import styles from "./cadastro.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

const Cadastro = (props: Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    const [msgInput, setMsgInput] = useState<string>("");
    const nav = useNavigate();
    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setMsgInput("campo vazio");
            return;
        }
        axios
            .post("http://localhost:8000/login/cadastro", {
                email,
                password,
                name,
            })
            .then(() => {
                nav("/login");
            })
            .catch((err) => {
                setMsg("Esse e-mail ja existe");
                return;
            });
    };

    return (
        <div className={styles.cadastro}>
            <h1>Cadastro</h1>
            <h2 style={{ color: "#fff" }}>
                <strong>{msg}</strong>
            </h2>
            <form onSubmit={sub}>
                <label>
                    <span>Nome</span>
                    <input
                        placeholder={msgInput}
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                    />
                </label>
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
        </div>
    );
};

export default Cadastro;
