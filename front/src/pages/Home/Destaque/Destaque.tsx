import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Destaque.module.css";
import { useNavigate } from "react-router-dom";
import { inf } from "../../../interfaces";

type Props = {};

const Destaque = (props: Props) => {
    const [infos, setInfos] = useState<Array<inf>>([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/posts").then((res) => {
            setInfos(res.data);
        });
    }, []);
    return (
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
        </div>
    );
};

export default Destaque;
