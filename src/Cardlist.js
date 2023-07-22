import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
    // map is a better alternative of for loop
    // we give a unique key value to make dom manipulation easier for react
  });
  return (
    <div>
      {/* here qwe will use props: properties imported from robots,js */}
      {/*       
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
      {/* now we have a problem, lets say if we have hundreds of robots so its very tideous to code for each robot so instead we will use a loop to loop over the entire robots data */}
      {cardsArray}
    </div>
  );
};

export default Cardlist;
