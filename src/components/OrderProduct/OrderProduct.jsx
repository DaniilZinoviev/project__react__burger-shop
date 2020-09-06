import React from "react";
import Popup from "reactjs-popup";
import { IngredientList } from "../IngredientList";

function OrderProduct({ data, removeFromOrder, index }) {
  const { imgSrc, name, price, ingredients } = data;

  return (
    <div className="order__product-wrap">
      <div className="order__product flex">
        <div className="order__img">
          <img src={imgSrc} alt={name} title={name} />
        </div>

        <div className="order__descr flex">
          <div className="order__info flex">
            <h3 className="order__title">{name}</h3>

            <Popup
              trigger={<div className="order__btn-show btn">Дополнительно</div>}
              on="hover"
              className="show-ingredients"
              position="right center"
            >
              <ul className="ingredients-list">
                <IngredientList ingredients={ingredients} />
              </ul>
            </Popup>
          </div>

          <div className="order__price-wrap">
            <div className="order__price">{price} грн.</div>
          </div>
        </div>

        <button
          className="product__close"
          onClick={() => removeFromOrder(index)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default OrderProduct;
