import React from "react";
import "./Specials.scss";

class Specials extends React.Component {
  render() {
    const { specials, id } = this.props;
    return (
      <div>
        {specials.map((item, i) => {
          if (id === item.ingredientId) {
            return (
              <div
                key={i}
                className="special__div p-3 mt-2 mr-4 d-inline-block"
              >
                <h3 className="special__h3">Special!</h3>
                <span className="special__span--title">{item.title} : </span>
                <span>{item.type.toUpperCase()}</span>
                <br />

                {/*helper function to strip html tags returned by api */}
                <span>{item.text.replace(/(<([^>]+)>)/gi, "")}</span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

export default Specials;
