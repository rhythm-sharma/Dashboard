import React from "react";
import Card from "./Card";

function CardContainer(props) {
  let cardContainer = props.usersData.userData.members.map((item, index) => {
    return <Card key={index} item={item} />;
  });

  return <React.Fragment>{cardContainer}</React.Fragment>;
}

export default CardContainer;
