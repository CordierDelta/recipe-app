import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./RecipeDetail.scss";

class Ingredients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      directions: []
    };
  }

  render() {
    const ingredients = this.props.ingredients.map((item, i) => {
      const thing = item.uuid;

      return (
        <li key={i} className="detail__li mb-3">
          <span className="detail__li--amount">
            {item.amount} {item.measurement}
          </span>{" "}
          - {item.name}
        </li>
      );
    });

    return (
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
            <h1>{this.props.name}</h1>
          </CardTitle>
          <CardSubtitle>
            <span>Prep Time: {`${this.props.prep} mins`}</span>
            <br />
            <span>Cook Time: {`${this.props.cook} mins`}</span>
            <br />
            <span>Serves: {this.props.servings}</span>
          </CardSubtitle>
        </CardBody>
        <CardImg
          top
          width="100%"
          src={`http://localhost:3001${this.props.img}`}
          alt=""
        />
        <h3 className="detail__h3 mt-3 ml-3">Ingredients</h3>
        <ul className="my-4 detail__ul">{ingredients}</ul>
      </Card>
    );
  }
}

export default Ingredients;
