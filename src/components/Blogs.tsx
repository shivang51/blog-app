import React from "react";
import { IBlog } from "./Interfaces";
import Blog from "./Blog";
import "./styles/css/Blogs.css";

interface Props {
  blogs: IBlog[];
}

function Blogs(props: Props) {
  return (
    <div className="blogs">
      {props.blogs.map((blog, ind: number) => {
        return <Blog key={ind} ind={ind} blog={blog} />;
      })}
    </div>
  );
}

export default Blogs;
