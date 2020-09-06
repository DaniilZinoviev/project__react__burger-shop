import React from "react";
import { OrderProductList } from "../components/OrderProductList";
import { connect } from "react-redux";
import { cleanOrder } from "../store/actions";

const OrderPage = ({ name, cleanOrder, changePage }) => {
  if (name !== "OrderPage") {
    return null;
  }

  const handleCancel = () => {
    cleanOrder();
    changePage("MainPage");
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
            onAdd={() => changePage("MainPage")}
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

export default connect(null, { cleanOrder })(OrderPage);
