import React from "react";
import "./App.scss";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import { Router, Link } from "@reach/router";
import { getSpecials } from "./utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specials: []
    };
  }

  componentDidMount() {
    getSpecials().then(rsp => this.setState({ specials: rsp.data }));
  }
  render() {
    return (
      <div className="App">
        <div className="header__div">
          <Link to="/" className="header__a py-4 mb-5 d-block text-center">
            Crescendo Kitchen
          </Link>
        </div>
        <div className="router-wrapper">
          <Router>
            <RecipeList path="/" />
            <RecipeDetail path="/recipe/:id" specials={this.state.specials} />
          </Router>
        </div>
        <div className="footer__div mt-5">
          <Link to="/" className="footer__a py-4  d-block text-center">
            © Crescendo Kitchen 2019
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
