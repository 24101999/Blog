import React, { useState, useEffect } from "react";
import { inf } from "../../../interfaces";
import axios from "axios";
import styles from "./Post.module.css";
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
                          <div key={p.id} className="">
                              <img src={p.img} alt="" />
                              <h2>{p.titulo}</h2>
                              <button onClick={() => destroy(p.id)}>
                                  deletar
                              </button>
                              <button onClick={() => nav(`/post/edit/${p.id}`)}>
                                  editar
                              </button>
                          </div>
                      );
                  })
                : ""}
        </div>
    );
};

export default PostAdmin;
