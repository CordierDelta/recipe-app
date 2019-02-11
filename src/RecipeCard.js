import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import "./RecipeCard.scss";
import { Link } from "@reach/router";

const RecipeCard = props => {
  const { id } = props;
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
            <span>Cook Time: {`${props.cookTime} mins`}</span>
            <br />
            <span>Serves: {props.servings}</span>
          </CardSubtitle>
          <CardText className="mt-3 mb-4">{props.description}</CardText>
          <Link to={`/recipe/${id}`} className="card__btn">
            Get Recipe
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;
