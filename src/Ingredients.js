import React from "react";
import Specials from "./Specials";
import "./RecipeDetail.scss";

class Ingredients extends React.Component {
  render() {
    return (
      <div>
        <h3 className="detail__h3 mt-3 ml-3">Ingredients</h3>
        <ul className="my-4 detail__ul">
          {this.props.ingredients.map((item, i) => {
            return (
              <li key={i} className="detail__li mb-3">
                <span className="detail__li--amount">
                  {item.amount} {item.measurement}
                </span>{" "}
                - {item.name}
                <Specials id={item.uuid} specials={this.props.specials} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Ingredients;
