import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Innsert.module.css";
import { useNavigate } from "react-router-dom";

type Props = {};

interface dados {
    id?: number;
    name?: string;
}

const Insert = (props: Props) => {
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [categoria, setCategoria] = useState<number>();
    const [img, setImg] = useState<File | undefined>();
    const [dados, setDados] = useState<Array<dados>>();
    const [msg, setMsg] = useState<string>("");
    const nav = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/categorias").then((res) => {
            setDados(res.data);
        });
    }, []);

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!titulo || !descricao || !autor) {
            setMsg("campo vazio");
            return;
        }

        axios
            .post(
                "http://localhost:8000/",
                {
                    titulo,
                    descricao,
                    autor,
                    categoria,
                    img,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then(() => {
                nav("/");
                alert("Post cadastrado com sucesso");
            })
            .catch(() => {
                setMsg("algo deu errado");
                console.log("erro");
            });
    };
    return (
        <div className={styles.insert}>
            {" "}
            <form onSubmit={sub}>
                <h1>CRIAR POST</h1>
                <label>
                    <span>Imagem</span>
                    <input
                        type="file"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            if (!e.target.files) return;
                            setImg(e.target.files[0]);
                        }}
                    />
                </label>
                <label>
                    <span>Titulo</span>
                    <input
                        placeholder={msg}
                        type="text"
                        value={titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setTitulo(e.target.value)
                        }
                    />
                </label>
                <label>
                    <span>Descricao</span>
                    <textarea
                        placeholder={msg}
                        value={descricao}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setDescricao(e.target.value)
                        }
                    ></textarea>
                </label>
                <label>
                    <span>Autor</span>
                    <input
                        placeholder={msg}
                        value={autor}
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setAutor(e.target.value)
                        }
                    />
                </label>
                <label>
                    <span>Categoria</span>
                    <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            setCategoria(parseInt(e.target.value))
                        }
                    >
                        <option value="0">selecione um valor</option>
                        {dados
                            ? dados.map((d) => {
                                  return (
                                      <option key={d.id} value={d.id}>
                                          {d.name}
                                      </option>
                                  );
                              })
                            : ""}
                    </select>
                </label>
                <button type="submit">POSTAR</button>
            </form>
        </div>
    );
};

export default Insert;
