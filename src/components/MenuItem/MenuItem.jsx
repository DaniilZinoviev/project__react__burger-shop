import React from "react";
import { connect } from "react-redux";
import { addToOrder } from "../../store/actions";
import { compose } from "../../utils/compose";
import { withRouter } from "react-router-dom";

function MenuItem({ addToOrder, itemData, history }) {
  const handleClick = () => {
    addToOrder(itemData);
    history.push("/edit");
  };

  return (
    <div className="item-wrap">
      <div className="item flex">
        <div className="item__img">
          <img
            src={itemData.imgSrc}
            alt={itemData.name}
            title={itemData.name}
          />
        </div>

        <div className="item__descr flex">
          <div className="item__title">{itemData.name}</div>
          <div className="item__footer flex">
            <div className="item__price">{itemData.price} грн.</div>
            <button
              className="item__add btn"
              title="Редактировать начинку"
              onClick={() => handleClick()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compose(
  connect(null, {
    addToOrder,
  }),
  withRouter
)(MenuItem);
