import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Categorias.module.css";
import { useNavigate } from "react-router-dom";
import { categoria, inf } from "../../../interfaces";
import Loading from "../../../loading/Loading";

type Props = {};

const Categoria = (props: Props) => {
    const [categoria, setCategoria] = useState<Array<categoria>>([]);
    const [infosCategoria, setInfosCategoria] = useState<Array<inf>>([]);
    const [load, setLoad] = useState<boolean>(false);
    const nav = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/categorias").then((res) => {
            setCategoria(res.data);
        });
    }, []);

    const get = (e: number) => {
        setTimeout(() => {
            axios
                .get(`http://localhost:8000/posts/categoria/${e}`)
                .then((res) => {
                    setInfosCategoria(res.data);
                    setLoad(true);
                });
        }, 500);
        nav(`/post/categoria/${e}`);
    };
    return (
        <div>
            <h1>Categorias</h1>
            <nav>
                {categoria
                    ? categoria.map((c) => {
                          return (
                              <div
                                  key={c.id}
                                  className={styles.categorias}
                                  style={{ display: "flex" }}
                              >
                                  <button onClick={() => get(c.id)}>
                                      {c.name}
                                  </button>
                              </div>
                          );
                      })
                    : ""}
            </nav>

            <div className={styles.infoscat}>
                {infosCategoria
                    ? infosCategoria.map((i) => {
                          return (
                              <div
                                  onClick={() => nav(`/post/unico/${i.id}`)}
                                  key={i.id}
                                  className={styles.infosCategoria}
                              >
                                  <img src={i.img} alt="" />
                                  <h2>{i.titulo}</h2>
                                  <p>
                                      <strong>{i.autor}</strong>
                                  </p>
                                  <p>{i.descricao?.substring(0, 20)}...</p>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
};

export default Categoria;
