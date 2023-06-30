import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./EditPost.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { categoria, inf } from "../../../interfaces";
type Props = {};

const EditPost = (props: Props) => {
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [categoria, setCategoria] = useState<number>();
    const [categoriaUnica, setCategoriaUnica] = useState<string>("");
    const [img, setImg] = useState<File | undefined>();
    const [post, setPost] = useState<inf>();
    const [DadosSelect, setDadosSelect] = useState<Array<categoria>>([]);
    const param = useParams();
    const id = param.id;
    const nav = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/posts/${id}`).then((res) => {
            setPost(res.data);
        });
        axios.get("http://localhost:8000/categorias").then((res) => {
            setDadosSelect(res.data);
        });
        axios.get(`http://localhost:8000/categorias/${id}`).then((res) => {
            setCategoriaUnica(res.data);
        });
    }, []);

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post(
                `http://localhost:8000/post/update/${id}`,
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
                nav("/admin");
            })
            .catch(() => {
                return;
            });
    };

    return (
        <div className={styles.edit}>
            <form onSubmit={sub}>
                <h2>EDITAR POST</h2>
                <label>
                    <span>imagem</span>
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
                        placeholder={post ? post?.titulo : ""}
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setTitulo(e.target.value)
                        }
                    />
                </label>
                <label>
                    <span>Descricao</span>
                    <textarea
                        placeholder={post ? post?.descricao : ""}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setDescricao(e.target.value)
                        }
                    ></textarea>
                </label>
                <label>
                    <span>Autor</span>
                    <input
                        placeholder={post ? post?.autor : ""}
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
                        <option value={1}></option>
                        {DadosSelect
                            ? DadosSelect.map((ds) => {
                                  return (
                                      <option key={ds.id} value={ds.id}>
                                          {ds.name}
                                      </option>
                                  );
                              })
                            : ""}
                    </select>
                </label>
                <button type="submit">Editar</button>
            </form>
        </div>
    );
};

export default EditPost;
