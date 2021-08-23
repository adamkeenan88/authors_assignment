import AuthorForm from "../Components/NewAuthorForm";
import { Link, navigate } from "@reach/router";
import React, { useState } from "react";

const NewAuthor = () => {
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);

  return (
    <div>
      <section className="pageHeader">
        <div className="favAuth">Favorite Authors</div>
        <div className="linkBox">
          <Link to={"/"}>Home</Link>
        </div>
      </section>
      <AuthorForm
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};

export default NewAuthor;
