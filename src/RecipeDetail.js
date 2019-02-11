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
    return (
      <div>
        <Container>
          <Row>
            <Col md="6">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>
                    <h1>{this.state.name}</h1>
                  </CardTitle>
                  <CardSubtitle>
                    <span>Prep Time: {`${this.state.prepTime} mins`}</span>
                    <br />
                    <span>Cook Time: {`${this.state.cookTime} mins`}</span>
                    <br />
                    <span>Serves: {this.state.servings}</span>
                  </CardSubtitle>
                </CardBody>
                <CardImg
                  top
                  width="100%"
                  src={`http://localhost:3001${this.state.img}`}
                  alt=""
                />

                <Ingredients
                  ingredients={this.state.ingredients}
                  specials={this.props.specials}
                />
              </Card>
            </Col>

            <Col md="6">
              <Card>
                <CardBody>
                  <Directions steps={this.state.directions} />
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
