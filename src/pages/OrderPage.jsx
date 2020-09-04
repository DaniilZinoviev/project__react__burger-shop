import React from "react";
import { OrderProductList } from "../components/OrderProductList";

const OrderPage = (props) => {
  if (props.name !== "OrderPage") {
    return null;
  }

  const handleCancel = () => {
    props.cleanOrder();
    props.changePage("MainPage");
  };

  return (
    <section className="app__order">
      <div className="container">
        <div className="section__head">
          <h2>Итоговый заказ:</h2>
        </div>

        <div className="section__body">
          <OrderProductList
            productsOrder={props.productsOrder}
            changeOrderIndex={props.changeOrderIndex}
            removeFromOrder={props.removeFromOrder}
          />

          <div className="order__buttons">
            <button
              className="order__btn-add btn btn-add"
              onClick={() => props.changePage("MainPage")}
            >
              Добавить в заказ
            </button>

            <button
              className="order__btn-confirm btn btn-confirm btn-disabled"
              title="Данная функция ещё на доработке"
            >
              Подтвердить
            </button>

            <button
              className="order__btn-cancel btn btn-cancel"
              onClick={handleCancel}
            >
              Отменить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
