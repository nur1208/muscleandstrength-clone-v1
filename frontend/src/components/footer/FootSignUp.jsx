import React from "react";

export const FootSignUp = ({ fields }) => {
  const handleSignUp = () => {
    // TODO handle sign up for newsletters.
  };
  return (
    <form className="newsletter-signup-form">
      {fields.map((field, index) => (
        <React.Fragment key={index}>field</React.Fragment>
      ))}
      <button
        className="btn btn-submit btn-flat-blue"
        onClick={handleSignUp}
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};
