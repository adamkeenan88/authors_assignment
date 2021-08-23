import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const EditAuthor = (props) => {
  const { authorId } = props;
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${authorId}`)
      .then((queriedAuthor) => {
        console.log(queriedAuthor.data.author);

        setName(queriedAuthor.data.author.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/author/${authorId}`, {
        name,
      })
      .then((updatedDoc) => navigate("/"))
      .catch((err) => {
        console.log("something went wrong");
      });
  };
  return (
    <div>
      <section className="pageHeader">
        <div className="favAuth">Favorite Authors</div>
        <div className="linkBox">
          <Link to={`/`}>Home</Link>
        </div>
      </section>
      <p style={{ fontSize: 30 }}>Edit this author:</p>
      <form onSubmit={handleSubmitUpdate}>
        <p>Name: </p>
        <p>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <button onClick={(e) => navigate("/")}>Cancel</button>
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditAuthor;
