import React from "react";
import DeleteSpan from "./DeleteSpan.jsx";

function IngredientsList(props) {
    function renderDeleteBtn(ingredient) {
        if (props.removeIngredient) {
            return <DeleteSpan removeIngredient={props.removeIngredient} ingredient={ingredient}/> ;
        }
        return "";
    }

    return (
        <React.Fragment>
            {props.ingredients.map(function(ingredient, i) {
                return (<li key={i}>{ingredient} {renderDeleteBtn(ingredient)}</li>)
            })}
        </React.Fragment>
    )
}

export default IngredientsList ;