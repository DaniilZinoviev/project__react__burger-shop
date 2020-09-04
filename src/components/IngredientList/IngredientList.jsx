import React from "react";

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
      {ingredients.map(function (ingredient, i) {
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

export default IngredientList;
