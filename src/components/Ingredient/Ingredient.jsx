import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

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

Ingredient.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredient;
