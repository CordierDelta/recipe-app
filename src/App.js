import React, { Component } from "react";
import "./styles/App.scss";

import RecipeList from "./RecipeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header__div">
          <h1 className="text-center py-4 mb-5">Crescendo Kitchen</h1>
        </div>

        <RecipeList />
      </div>
    );
  }
}

export default App;
