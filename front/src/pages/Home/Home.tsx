import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
type Props = {};

interface inf {
    id: number;
    titulo?: string;
    descricao?: string;
    autor?: string;
}
interface categoria {
    id: number;
    name?: string;
}

const Home = (props: Props) => {
    const [infos, setInfos] = useState<Array<inf>>([]);
    const [infosCategoria, setInfosCategoria] = useState<Array<inf>>([]);
    const [categoria, setCategoria] = useState<Array<categoria>>([]);
    const [id, setId] = useState<number>();
    const nav = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/posts").then((res) => {
            setInfos(res.data);
        });
        axios.get("http://localhost:8000/categorias").then((res) => {
            setCategoria(res.data);
        });
    }, []);

    const get = (e: number) => {
        axios.get(`http://localhost:8000/posts/categoria/${e}`).then((res) => {
            setInfosCategoria(res.data);
        });
        nav(`/post/categoria/${e}`);
    };

    return (
        <div className={styles.home}>
            <h1>home</h1>
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
                                  <h2>{i.titulo}</h2>
                                  <p>{i.descricao?.substring(0, 60)}...</p>
                                  <p>{i.autor}</p>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
};

export default Home;
