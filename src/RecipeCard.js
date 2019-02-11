import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./RecipeCard.scss";

const RecipeCard = props => {
  return (
    <div>
      <Card className="text-center mb-5">
        <CardImg
          top
          width="100%"
          src={`http://localhost:3001/${props.img}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>
            <span>Prep Time: {`${props.prepTime} mins`}</span>
            <br />
            <span>Serves: {props.servings}</span>
          </CardSubtitle>
          <CardText className="mt-3 mb-4">{props.description}</CardText>
          <Button className="card__btn">Get Recipe</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;
