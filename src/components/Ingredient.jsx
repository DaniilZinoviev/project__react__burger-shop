import React from "react";
import Popup from "reactjs-popup";

function Ingredient(props) {
    function handleClick(name) {
        props.closeModal();
        props.addIngredient(name);
    }
    return (
        <Popup
            trigger={<li>{props.name}</li>}
            position="top center"
        >
            <React.Fragment>
                {props.ingredients.map(function(name, i) {
                    return <li key={i} onClick={() => handleClick(name)} >{name}</li>
                })}
            </React.Fragment>
        </Popup>
    )
}

export default Ingredient ;