import React from "react";
import { IBlog } from "./Interfaces";

interface Props {
  blogs: IBlog[];
}

function Blogs(props: Props) {
  console.log(props.blogs);
  return <div>Blogs</div>;
}

export default Blogs;
