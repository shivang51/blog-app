import "./styles/App.css";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Add from "./Add";
import { IBlog, IBlogs } from "./Interfaces";
import Read from "./Read";
import React from "react";
import Blogs from "./Blogs";

function App() {
  const [blogs, setBlogs] = React.useState<IBlogs>([]);

  function setblogs(blog: IBlog): void {
    setBlogs([...blogs, blog]);
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact />
        <Route path="/add" exact>
          <Add setBlogs={setblogs} />
        </Route>
        <Route path="/blogs" exact component={() => <Blogs blogs={blogs} />} />
        <Route
          path="/read/:ind"
          exact
          component={(match: any) => (
            <Read ind={match.match.params.ind} blogs={blogs} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
