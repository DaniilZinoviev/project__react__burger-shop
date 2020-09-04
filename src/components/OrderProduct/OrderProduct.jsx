import React from "react";
import Popup from "reactjs-popup";
import { IngredientList } from "../IngredientList";

function OrderProduct({ data, removeFromOrder, index }) {
  return (
    <div className="order__product-wrap">
      <div className="order__product flex">
        <div className="order__img">
          <img src={data.imgSrc} alt={data.name} title={data.name} />
        </div>

        <div className="order__descr flex">
          <div className="order__info flex">
            <h3 className="order__title">{data.name}</h3>

            <Popup
              trigger={<div className="order__btn-show btn">Дополнительно</div>}
              on="hover"
              className="show-ingredients"
              position="right center"
            >
              <ul className="ingredients-list">
                <IngredientList ingredients={data.ingredients} />
              </ul>
            </Popup>
          </div>

          <div className="order__price-wrap">
            <div className="order__price">{data.price} грн.</div>
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
