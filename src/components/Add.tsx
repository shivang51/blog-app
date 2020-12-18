import React, { useState } from "react";
import "./styles/css/Add.css";
import { IBlog } from "./Interfaces";
import { Redirect } from "react-router-dom";

interface Props {
  setBlogs: (blog: IBlog) => void;
}

function Add(props: Props) {
  const [info, setInfo] = useState<IBlog>({ title: "", body: "" });
  const [clicked, setClicked] = useState<boolean>(false);

  function handleInfoChange(
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setInfo(
      (preInfo): IBlog => {
        return { ...preInfo, [name]: value };
      }
    );
  }

  function addClick() {
    if (info.body.length > 0 && info.title.length > 0) {
      props.setBlogs(info);
      setClicked(true);
    }
  }

  React.useEffect(() => {
    console.log("Clicked", clicked);
  }, [clicked]);

  return (
    <div className="add">
      <div className="compileArea">
        <input
          type="text"
          id="title"
          name="title"
          autoComplete="off"
          placeholder="Title"
          value={info.title}
          onChange={handleInfoChange}
        />
        <textarea
          name="body"
          id="body"
          cols={30}
          rows={10}
          placeholder="Type here"
          value={info.body}
          onChange={handleInfoChange}
        ></textarea>

        <div className="controls">
          <button id="add-button" onClick={addClick}>
            Add
          </button>
        </div>
      </div>
      {clicked ? <Redirect to="./blogs" /> : null}
    </div>
  );
}

export default Add;
