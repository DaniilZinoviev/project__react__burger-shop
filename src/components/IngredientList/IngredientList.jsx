import React from "react";
import PropTypes from "prop-types";

const IngredientList = ({ removeIngredient, ingredients }) => {
  const removeButton = (ingredient) => (
    <span
      className="edit__delete-ingredient"
      title="Убрать ингридиент"
      onClick={() => removeIngredient(ingredient)}
    >
      &times;
    </span>
  );

  return (
    <React.Fragment>
      {ingredients.map((ingredient, i) => {
        return (
          <li key={i}>
            <span>{ingredient}</span>
            {removeIngredient && removeButton(ingredient)}
          </li>
        );
      })}
    </React.Fragment>
  );
};

IngredientList.propTypes = {
  removeIngredient: PropTypes.func,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IngredientList;
