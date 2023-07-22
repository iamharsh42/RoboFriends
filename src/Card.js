import React from "react";
import "tachyons";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* tachyons basically provides pre-defined classes which makes it easier for us to ame the classes also with predefined css as well */}
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
