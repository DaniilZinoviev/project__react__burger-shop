import React from "react";
import Popup from "reactjs-popup";

const Ingredient = ({ closeModal, addIngredient, name, ingredients }) => {
  const handleClick = (name) => {
    closeModal();
    addIngredient(name);
  };
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
