import React from "react";
import { OrderProductList } from "../components/OrderProductList";
import { connect } from "react-redux";
import { cleanOrder } from "../store/actions";
import { withRouter } from "react-router-dom";
import { compose } from "../utils/compose";

const OrderPage = ({ name, cleanOrder, history }) => {
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

export default compose(
  connect(null, {
    cleanOrder,
  }),
  withRouter
)(OrderPage);
