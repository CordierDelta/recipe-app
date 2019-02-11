import React, { Component } from "react";

class Directions extends Component {
  render() {
    const steps = this.props.steps.map((item, i) => (
      <li key={i} className="detail__li--directions mb-3">
        {i + 1} - {item.instructions} {item.optional ? "*" : ""}
      </li>
    ));
    return (
      <div>
        <h3 className="detail__h3 mt-3 ml-3">Directions</h3>
        <ul className="my-4 detail__ul">{steps}</ul>
        <p className="ml-3 mt-5">* Optional Step</p>
      </div>
    );
  }
}

export default Directions;
