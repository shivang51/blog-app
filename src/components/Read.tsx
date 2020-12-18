import React from "react";
import { IBlog } from "./Interfaces";
import "./styles/css/Read.css";

interface Props {
  ind: string;
  blogs: IBlog[];
}

function Read(props: Props) {
  const blog: IBlog = props.blogs[parseInt(props.ind)];

  return (
    <div className="read">
      <h1 className="title">{blog.title}</h1>
      <h4 className="body">{blog.body}</h4>
    </div>
  );
}

export default Read;
