import React, { useEffect, useState } from "react";
import styles from "../post/Post.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
type Props = {};

interface inf {
    id: number;
    titulo?: string;
    descricao?: string;
    autor?: string;
}

const Post = (props: Props) => {
    const [post, setPost] = useState<inf>();
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/posts/${id}`).then((res) => {
            setPost(res.data);
        });
        console.log(post);
    }, []);

    return (
        <div>
            {post ? (
                <div className="">
                    <h2>{post.titulo}</h2>
                    <p>{post.descricao}</p>
                    <p>{post.autor}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Post;
