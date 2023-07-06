import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./CategoriaAdmin.module.css";
import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { categoria } from "../../../interfaces";
import Loading from "../../../loading/Loading";
import Modal from "./Modal";
// import Modal from "./Modal";
type Props = {};

const CategoriaAdmin = (props: Props) => {
    const [name, setname] = useState<string>("");
    const [categorias, setCategorias] = useState<Array<categoria>>([]);
    const [load, setLoad] = useState<boolean>(false);
    const nav = useNavigate();
    const [id, setId] = useState<number>();
    const [modal, setModal] = useState<string>(styles.modalNone);

    const get = () => {
        setTimeout(() => {
            axios.get("http://localhost:8000/categorias").then((res) => {
                setCategorias(res.data);
                setLoad(true);
            });
        }, 500);
    };

    useEffect(() => {
        get();
    }, []);

    const sub = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/categorias/insert", { name })
            .then(() => {
                nav("/admin");
            })
            .catch(() => {
                return;
            });
        setTimeout(() => {
            get();
        }, 500);
    };

    const opModal = (id: number) => {
        setId(id);
        setModal(styles.modal);
    };

    const destroy = () => {
        axios.delete(`http://localhost:8000/categorias/destroy/${id}`);
        setTimeout(() => {
            get();
        }, 500);
        clModal();
    };

    const clModal = () => {
        setModal(styles.modalNone);
    };

    return (
        <>
            <Modal cl={clModal} md={modal} del={destroy} />
            <div className={styles.categoria}>
                <form onSubmit={sub}>
                    <label>
                        <span>
                            <strong>Cadastrar categoria</strong>
                        </span>
                        <input
                            type="text"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setname(e.target.value)
                            }
                        />
                    </label>
                    <button type="submit">CADASTRAR</button>
                </form>
                <div className={styles.TodasCategorias}>
                    {categorias
                        ? categorias.map((c) => {
                              return (
                                  <div
                                      key={c.id}
                                      className={styles.categoriaUnica}
                                  >
                                      <h3>{c.name}</h3>
                                      <div className="">
                                          <button onClick={() => opModal(c.id)}>
                                              <AiFillDelete color="red" />
                                          </button>
                                          <button
                                              onClick={() =>
                                                  nav(`/categoria/edit/${c.id}`)
                                              }
                                          >
                                              <AiFillEdit color="green" />
                                          </button>
                                      </div>
                                  </div>
                              );
                          })
                        : ""}
                    {!load ? <Loading /> : ""}
                </div>
            </div>
        </>
    );
};

export default CategoriaAdmin;
