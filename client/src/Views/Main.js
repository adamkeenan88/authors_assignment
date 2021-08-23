import React, { useState, useEffect } from "react";
import DisplayAllAuthors from "../Components/DisplayAllAuthors";
import { Link } from "@reach/router";
import io from "socket.io-client";

const Main = () => {
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    console.log("Is this running?");
    socket.on("Welcome", (data) => console.log(data));
    return () => socket.disconnect(true);
  }, []);
  return (
    <div>
      <section className="pageHeader">
        <div className="favAuth">Favorite Authors</div>
        <div className="linkBox">
          <Link to={`/author/new`}>Add an author</Link>
        </div>
      </section>
      <DisplayAllAuthors
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};
export default Main;
