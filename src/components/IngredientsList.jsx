import React from "react";
import DeleteSpan from "./DeleteSpan.jsx";

const IngredientsList = ({ removeIngredient, ingredients }) => {
  const renderDeleteBtn = (ingredient) => {
    if (removeIngredient) {
      return (
        <DeleteSpan
          removeIngredient={removeIngredient}
          ingredient={ingredient}
        />
      );
    }
    return "";
  };

  return (
    <React.Fragment>
      {ingredients.map(function (ingredient, i) {
        return (
          <li key={i}>
            {ingredient} {renderDeleteBtn(ingredient)}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default IngredientsList;
