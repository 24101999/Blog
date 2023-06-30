import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./CategoriaEdit.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CaaRecord } from "dns";
import { categoria } from "../../../interfaces";
type Props = {};

const CategoriaEdit = (props: Props) => {
    const [name, setName] = useState<string>("");
    const [categoria, setCategoria] = useState<categoria>();
    const param = useParams();
    const id = param.id;
    const nav = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/categorias/${id}`).then((res) => {
            setCategoria(res.data);
        });
    }, []);

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/categorias/update/${id}`, { name })
            .then(() => {
                nav("/admin");
            });
    };
    return (
        <div className={styles.edit}>
            <form onSubmit={sub}>
                <h2>
                    <strong>Editar categoria</strong>
                </h2>
                <label>
                    <input
                        placeholder={categoria ? categoria.name : ""}
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                    />
                </label>
                <button type="submit">EDITAR</button>
            </form>
        </div>
    );
};

export default CategoriaEdit;
