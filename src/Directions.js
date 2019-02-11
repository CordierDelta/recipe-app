import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";

class Directions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const steps = this.props.steps.map((item, i) => (
      <li key={i} className="detail__li--directions mb-3">
        {i + 1} - {item.instructions} {item.optional ? "*" : ""}
      </li>
    ));
    return (
      <div>
        <Card>
          <CardBody>
            <h3 className="detail__h3 mt-3 ml-3">Directions</h3>
            <ul className="my-4 detail__ul">{steps}</ul>
            <p className="ml-3 mt-5">* Optional Step</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Directions;
