import React from "react";
import { Container, Row, Col } from "reactstrap";
import RecipeCard from "./RecipeCard";
import { getAllRecipes } from "./utils/api";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    //uses axios call from api.js
    getAllRecipes()
      .then(rsp => this.setState({ recipes: rsp.data }))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.recipes);

    const recipes = this.state.recipes.map((recipe, i) => (
      <Col key={i} sm="6">
        <RecipeCard
          title={recipe.title}
          description={recipe.description}
          img={recipe.images.medium}
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          servings={recipe.servings}
          id={recipe.uuid}
        />
      </Col>
    ));

    return (
      <Container>
        <Row>{recipes}</Row>
      </Container>
    );
  }
}

export default RecipeList;
