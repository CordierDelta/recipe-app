import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:3001/recipes").then(rsp => console.log(rsp));
  }
  render() {
    return (
      <div className="App">
        <h1>Recipe App</h1>
      </div>
    );
  }
}

export default App;
