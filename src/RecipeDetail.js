import React from "react";
import { getSingleRecipe } from "./utils/api";
import { Container, Row, Col } from "reactstrap";
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
              <Ingredients
                name={this.state.name}
                ingredients={this.state.ingredients}
                prep={this.state.prepTime}
                cook={this.state.cookTime}
                img={this.state.img}
                servings={this.state.servings}
              />
            </Col>

            <Col md="6">
              <Directions steps={this.state.directions} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecipeDetail;
