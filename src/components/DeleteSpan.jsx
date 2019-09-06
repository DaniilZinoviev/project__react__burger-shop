import React from "react";

function DeleteSpan(props) {
    return (
        <span 
            className="edit__delete-ingredient" 
            title="Убрать ингридиент"
            onClick={() => props.removeIngredient(props.ingredient)}
        >
            &times;
        </span>
    )
}

export default DeleteSpan ;