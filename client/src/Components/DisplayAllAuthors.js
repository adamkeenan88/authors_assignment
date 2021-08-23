import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAllAuthors = (props) => {
  const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    axios
      .get("http://localhost:8000/api")
      .then((allAuthors) => {
        console.log(allAuthors.data.author);
        setAuthors(allAuthors.data.author);
      })
      .catch((err) => console.log(err));
  }, [formSubmittedBoolean]);

  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/author/${id}`)
      .then((response) => {
        console.log("deletion successful");
        setFormSubmittedBoolean(!formSubmittedBoolean);
      })
      .catch((err) => console.log("error deleting author", err));
  };

  return (
    <div>
      <h2>We have quotes by:</h2>
      <table className="allAuthors">
        {authors
          ? authors.length > 0 &&
            authors.map((author, index) => (
              <tr key={index}>
                <td>{author.name}</td>
                <td>
                  <Link to={`/author/${author._id}/edit`}>Edit</Link> |
                  <button onClick={(e) => deleteAuthor(author._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          : "Author Loading"}
      </table>
    </div>
  );
};

export default DisplayAllAuthors;
