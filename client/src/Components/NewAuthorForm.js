import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const AuthorForm = (props) => {
  const [name, setName] = useState("");
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("success");
    const newAuthorData = { name };
    console.log(newAuthorData);
    axios
      .post("http://localhost:8000/api/author", newAuthorData)
      .then((newAuthor) => {
        setName("");
        setFormSubmittedBoolean(!formSubmittedBoolean);
        navigate("/");
      })
      .catch((err) => {
        console.log("error block", err.response);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors.errors);
      });
  };

  return (
    <>
      <p style={{ fontSize: 30 }}>Add a new author:</p>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Name</label>
        </p>
        <p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </p>
        <button onClick={(e) => navigate("/")}>Cancel</button>
        <input
          style={{ backgroundColor: "blue", color: "white" }}
          className="newauthor"
          type="submit"
          value="Add Author"
        />
      </form>
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </>
  );
};
export default AuthorForm;
