import React from "react";
import { getSingleRecipe } from "./utils/api";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import { Link } from "@reach/router";
import "./RecipeDetail.scss";
import PropTypes from "prop-types";

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      directions: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    //uses axios call from api.js
    getSingleRecipe(this.props.id)
      .then(rsp => {
        const recipe = rsp.data[0];
        this.setState({
          name: recipe.title,
          img: recipe.images.full,
          ingredients: recipe.ingredients,
          prepTime: recipe.prepTime,
          cookTime: recipe.cookTime,
          servings: recipe.servings,
          directions: recipe.directions
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const {
      name,
      img,
      ingredients,
      prepTime,
      cookTime,
      servings,
      directions
    } = this.state;

    return (
      <div>
        <Container>
          <div className="mb-4 font-weight-bold">
            <Link to="/">&larr; BACK</Link>
          </div>
          <Row>
            {/* Recipe Ingredients and General Info */}
            <Col md="6">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>
                    <h1>{name}</h1>
                  </CardTitle>

                  <CardSubtitle>
                    <span>Prep Time: {`${prepTime} mins`}</span>
                    <br />
                    <span>Cook Time: {`${cookTime} mins`}</span>
                    <br />
                    <span>Serves: {servings}</span>
                  </CardSubtitle>
                </CardBody>

                <CardImg
                  top
                  width="100%"
                  src={`http://localhost:3001${img}`}
                  alt={name}
                />

                <Ingredients
                  ingredients={ingredients}
                  specials={this.props.specials}
                />
              </Card>
            </Col>

            {/* Recipe Step by Step Directions */}
            <Col md="6">
              <Card>
                <CardBody>
                  <Directions steps={directions} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecipeDetail;

RecipeDetail.propTypes = {
  specials: PropTypes.array,
  id: PropTypes.string
};
