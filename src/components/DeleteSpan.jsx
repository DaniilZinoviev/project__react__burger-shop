import React from "react";

const DeleteSpan = ({ removeIngredient, ingredient }) => {
  return (
    <span
      className="edit__delete-ingredient"
      title="Убрать ингридиент"
      onClick={() => removeIngredient(ingredient)}
    >
      &times;
    </span>
  );
};

export default DeleteSpan;
