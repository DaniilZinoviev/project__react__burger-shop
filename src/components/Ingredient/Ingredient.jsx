import React from "react";
import Popup from "reactjs-popup";

const Ingredient = ({ handleClick, name, ingredients }) => {
  return (
    <Popup trigger={<li>{name}</li>} position="top center">
      <React.Fragment>
        {ingredients.map(function (name, i) {
          return (
            <li key={i} onClick={() => handleClick(name)}>
              {name}
            </li>
          );
        })}
      </React.Fragment>
    </Popup>
  );
};

export default Ingredient;
