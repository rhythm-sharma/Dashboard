import React, { Component } from "react";
import Card from "./Card";

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cardContainer = this.props.usersData.userData.members.map(
      (item, index) => {
        return <Card key={index} item={item} />;
      }
    );

    return <React.Fragment>{cardContainer}</React.Fragment>;
  }
}

export default CardContainer;
