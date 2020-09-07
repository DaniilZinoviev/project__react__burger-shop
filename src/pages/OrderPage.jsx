import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { OrderProductList } from "../components/OrderProductList";
import { cleanOrder } from "../store/actions";
import { compose } from "../utils/compose";

const OrderPage = ({ cleanOrder, history }) => {
  const handleCancel = () => {
    cleanOrder();
    history.push("/");
  };

  return (
    <section className="app__order">
      <div className="container">
        <div className="section__head">
          <h2>Итоговый заказ:</h2>
        </div>

        <div className="section__body">
          <OrderProductList />

          <OrderButtons
            onAdd={() => history.push("/")}
            onCancel={() => handleCancel()}
          />
        </div>
      </div>
    </section>
  );
};

const OrderButtons = ({ onCancel, onAdd }) => {
  return (
    <div className="order__buttons">
      <button className="btn order__btn-add btn-add" onClick={onAdd}>
        Добавить в заказ
      </button>

      <button
        className="btn btn-confirm order__btn-confirm btn-disabled"
        title="Данная функция ещё на доработке"
      >
        Подтвердить
      </button>

      <button className="btn btn-cancel order__btn-cancel" onClick={onCancel}>
        Отменить
      </button>
    </div>
  );
};

OrderPage.propTypes = {
  cleanOrder: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

OrderButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default compose(
  connect(null, {
    cleanOrder,
  }),
  withRouter
)(OrderPage);
