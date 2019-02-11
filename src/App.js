import React, { Component } from "react";
import "./styles/App.scss";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import { Router, Link } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header__div">
          <Link to="/" className="header__a py-4 mb-5 d-block text-center">
            Crescendo Kitchen
          </Link>
        </div>
        <Router>
          <RecipeList path="/" />
          <RecipeDetail path="/recipe/:id" />
        </Router>

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
