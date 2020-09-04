import React from "react";
import { OrderProduct } from "../OrderProduct";

const OrderProductList = ({
  productsOrder,
  changeOrderIndex,
  removeFromOrder,
}) => {
  if (productsOrder.length === 0) {
    return <h2 className="order__empty-h2">Отсутствуют заказы</h2>;
  }

  return (
    <div className="order__products">
      {productsOrder.map(function (product, i) {
        return (
          <OrderProduct
            key={i}
            index={i}
            data={product}
            changeOrderIndex={changeOrderIndex}
            removeFromOrder={removeFromOrder}
          />
        );
      })}
    </div>
  );
};

export default OrderProductList;
