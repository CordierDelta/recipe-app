import React from "react";
import Specials from "./Specials";
import "./RecipeDetail.scss";

class Ingredients extends React.Component {
  render() {
    const { ingredients, specials } = this.props;
    // map each ingredient to a list,
    // Specials component contains logic of whether or not to render anything
    const list = ingredients.map((item, i) => {
      return (
        <li key={i} className="detail__li mb-3">
          <span className="detail__li--amount">
            {item.amount} {item.measurement}
          </span>{" "}
          - {item.name}
          <Specials id={item.uuid} specials={specials} />
        </li>
      );
    });

    return (
      <div>
        <h3 className="detail__h3 mt-3 ml-3">Ingredients</h3>
        <ul className="my-4 detail__ul">{list}</ul>
      </div>
    );
  }
}

export default Ingredients;
