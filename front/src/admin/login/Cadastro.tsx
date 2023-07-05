import React, { useState, ChangeEvent } from "react";
import styles from "./cadastro.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
type Props = {};

const Cadastro = (props: Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/login/cadastro", {
                email,
                password,
                name,
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.cadastro}>
            <h1>Cadastro</h1>
            <form onSubmit={sub}>
                <label>
                    <span>Nome</span>
                    <input
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                    />
                </label>
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
        </div>
    );
};

export default Cadastro;
