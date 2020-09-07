import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { OrderProduct } from "../OrderProduct";
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

OrderProductList.propTypes = {
  removeFromOrder: PropTypes.func.isRequired,
  changeOrderIndex: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
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
