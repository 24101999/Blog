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
    img?: string;
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

            <div className={styles.destaque}>
                <div className="">
                    <h2>POSTS PRINCIPAIS</h2>
                </div>
                <div className={styles.destaqueUnicoDiv}>
                    {infos
                        ? infos.slice(0, 3).map((i) => {
                              return (
                                  <div
                                      key={i.id}
                                      onClick={() => nav(`/post/unico/${i.id}`)}
                                      className={styles.destaqueUnico}
                                  >
                                      <img src={i.img} alt="" />
                                      <p>
                                          <strong>Titulo:</strong>
                                          {i.titulo}
                                      </p>
                                      <p>
                                          <strong>Autor:{i.autor}</strong>
                                      </p>
                                      <p>
                                          <strong>Descricao:</strong>
                                          {i.descricao?.substring(0, 10)}....
                                      </p>
                                  </div>
                              );
                          })
                        : ""}
                </div>
                <div className={styles.criePost}>
                    <h3>CRIE SEU POST</h3>
                    <button onClick={() => nav("/insert")}>POSTAR</button>
                </div>
            </div>
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

export default Home;
