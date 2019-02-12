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
import PropTypes from "prop-types";

const RecipeCard = props => {
  const { img, title, prepTime, cookTime, servings, id, description } = props;
  return (
    <div>
      <Card className="text-center mb-5">
        <CardImg
          top
          width="100%"
          src={`http://localhost:3001/${img}`}
          alt={title}
        />

        <CardBody>
          <CardTitle>{title}</CardTitle>

          <CardSubtitle>
            <span>Prep Time: {`${prepTime} mins`}</span>
            <br />
            <span>Cook Time: {`${cookTime} mins`}</span>
            <br />
            <span>Serves: {servings}</span>
          </CardSubtitle>

          <CardText className="mt-3 mb-4">{description}</CardText>

          <Link to={`/recipe/${id}`} className="card__btn">
            Get Recipe
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  prepTime: PropTypes.number,
  cookTime: PropTypes.number,
  servings: PropTypes.number,
  id: PropTypes.string,
  description: PropTypes.string
};
