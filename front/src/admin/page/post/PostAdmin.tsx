import React, { useState, useEffect } from "react";
import { inf } from "../../../interfaces";
import axios from "axios";
import styles from "./Post.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "../../../loading/Loading";
import Modal from "../categorias/Modal";
type Props = {};

const PostAdmin = (props: Props) => {
    const [post, setPost] = useState<Array<inf>>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [id, setId] = useState<number>();
    const [modal, setModal] = useState<string>(styles.modalNone);
    const nav = useNavigate();
    const get = () => {
        setTimeout(() => {
            axios.get("http://localhost:8000/posts").then((res) => {
                setPost(res.data);
                setLoad(true);
            });
        }, 500);
    };
    useEffect(() => {
        get();
    }, []);

    const destroy = () => {
        axios.delete(`http://localhost:8000/post/destroy/${id}`);
        setTimeout(() => {
            get();
        }, 500);
        close();
    };

    const open = (e: number) => {
        setId(e);
        setModal(styles.modal);
    };

    const close = () => {
        setModal(styles.modalNone);
    };

    return (
        <>
            <Modal md={modal} cl={close} del={destroy} />
            <div className={styles.post}>
                {post
                    ? post.map((p) => {
                          return (
                              <div key={p.id} className={styles.infos}>
                                  <div className={styles.conteudoInfos}>
                                      <h2>{p.titulo}</h2>
                                      <img src={p.img} alt="" />
                                  </div>
                                  <div className={styles.buttonsPost}>
                                      <button onClick={() => open(p.id)}>
                                          <AiFillDelete color="red" />
                                      </button>
                                      <button
                                          onClick={() =>
                                              nav(`/post/edit/${p.id}`)
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
        </>
    );
};

export default PostAdmin;
