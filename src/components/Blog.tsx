import React from "react";
import { Redirect } from "react-router-dom";
import { IBlog } from "./Interfaces";

interface Props {
  blog: IBlog;
  ind: number;
}

function Blog(props: Props) {
  const [clicked, setClicked] = React.useState<boolean>(false);
  function handleClick() {
    setClicked(true);
  }
  return (
    <div className="blog" onClick={handleClick} title={props.blog.title}>
      <div className="blog-ic">
        <h1 className="title">{props.blog.title}</h1>
        <h4 className="body">{props.blog.body}</h4>
      </div>
      {clicked ? <Redirect to={`/read/${props.ind}`} /> : null}
    </div>
  );
}

export default Blog;
