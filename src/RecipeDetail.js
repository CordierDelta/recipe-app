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
import "./RecipeDetail.scss";

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      directions: []
    };
  }

  componentDidMount() {
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
