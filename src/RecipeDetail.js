import React from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
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
    axios
      .get(`http://localhost:3001/recipes?uuid=${this.props.id}`)
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
        console.log(rsp.data[0].title);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const ingredients = this.state.ingredients.map((item, i) => (
      <li key={i} className="detail__li mb-3">
        <span className="detail__li--amount">
          {item.amount} {item.measurement}
        </span>{" "}
        - {item.name}
      </li>
    ));

    const directions = this.state.directions.map((item, i) => (
      <li key={i} className="detail__li--directions mb-3">
        {i + 1} - {item.instructions} {item.optional ? "*" : ""}
      </li>
    ));

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
                <h3 className="detail__h3 mt-3 ml-3">Ingredients</h3>
                <ul className="my-4 detail__ul">{ingredients}</ul>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardBody>
                  <h3 className="detail__h3 mt-3 ml-3">Directions</h3>

                  <ul className="my-4 detail__ul">{directions}</ul>

                  <p className="ml-3 mt-5">* Optional Step</p>
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
