import React from "react";
import { OrderProduct } from "../OrderProduct";
import { connect } from "react-redux";
import { removeFromOrder, changeOrderIndex } from "../../store/actions";

const OrderProductList = ({ order, changeOrderIndex, removeFromOrder }) => {
  if (order.length === 0) {
    return <h2 className="order__empty-h2">Отсутствуют заказы</h2>;
  }

  return (
    <div className="order__products">
      {order.map(function (product, i) {
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

const mapStateToProps = ({ order: { order } }) => {
  return {
    order,
  };
};

export default connect(mapStateToProps, {
  removeFromOrder,
  changeOrderIndex,
})(OrderProductList);
