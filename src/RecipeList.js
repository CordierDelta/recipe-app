import React from "react";
import { Container, Row, Col, CardDeck } from "reactstrap";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "./utils/api";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    getRecipes().then(rsp => this.setState({ recipes: rsp.data }));
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
          servings={recipe.servings}
        />
      </Col>
    ));
    return (
      <Container>
        <Row>
          <CardDeck>{recipes}</CardDeck>
        </Row>
      </Container>
    );
  }
}

export default RecipeList;
