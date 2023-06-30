import React, { useState, useEffect } from "react";
import { inf } from "../../../interfaces";
import axios from "axios";
import styles from "./Post.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
type Props = {};

const PostAdmin = (props: Props) => {
    const [post, setPost] = useState<Array<inf>>([]);
    const nav = useNavigate();
    const get = () => {
        axios.get("http://localhost:8000/posts").then((res) => {
            setPost(res.data);
        });
    };
    useEffect(() => {
        get();
    }, []);

    const destroy = (e: number) => {
        axios.delete(`http://localhost:8000/post/destroy/${e}`);
        setTimeout(() => {
            get();
        }, 500);
    };

    return (
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
                                  <button onClick={() => destroy(p.id)}>
                                      <AiFillDelete color="red" />
                                  </button>
                                  <button
                                      onClick={() => nav(`/post/edit/${p.id}`)}
                                  >
                                      <AiFillEdit color="green" />
                                  </button>
                              </div>
                          </div>
                      );
                  })
                : ""}
        </div>
    );
};

export default PostAdmin;
