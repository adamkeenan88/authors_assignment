import React from "react";
import { Router } from "@reach/router";
import Main from "./Views/Main";
import NewAuthor from "./Views/NewAuthor";
import EditAuthor from "./Components/EditAuthor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NewAuthor path="/author/new" />
        <EditAuthor path="/author/:authorId/edit" />
      </Router>
    </div>
  );
}
export default App;
