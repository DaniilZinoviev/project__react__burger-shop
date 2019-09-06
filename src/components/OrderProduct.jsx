import React from "react";
import Popup from "reactjs-popup";
import IngredientsList from "./IngredientsList.jsx";

function OrderProduct(props) {
    
    return (
        <div className="order__product-wrap">
            <div className="order__product flex">

                <div className="order__img">
                    <img 
                        src={props.data.imgSrc} 
                        alt={props.data.name} 
                        title={props.data.name}
                    />
                </div>

                <div className="order__descr flex">

                    <div className="order__info flex">

                        <h3 className="order__title">{props.data.name}</h3>

                        <Popup
                            trigger={<div className="order__btn-show btn">Дополнительно</div>}
                            on="hover"
                            className="show-ingredients"
                            position="right center"
                        >
                            <ul className="ingredients-list">
                                <IngredientsList ingredients={props.data.ingredients}/>
                            </ul>
                        </Popup>
                        
                    </div>

                    <div className="order__price-wrap">
                        <div className="order__price">{props.data.price} грн.</div>
                    </div>
                </div>

                <button 
                    className="product__close" 
                    onClick={() => props.removeFromOrder(props.index)}
                >&times;</button>
            </div>
        </div>
    )
}

export default OrderProduct ;