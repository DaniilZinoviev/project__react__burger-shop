import React from "react";
import { connect } from "react-redux";
import { addToOrder } from "../../store/actions";
import { compose } from "../../utils/compose";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ addToOrder, itemData, history }) => {
  const handleClick = () => {
    addToOrder(itemData);
    history.push("/edit");
  };

  const { imgSrc, name, price } = itemData;

  return (
    <div className="item-wrap">
      <div className="item flex">
        <div className="item__img">
          <img src={imgSrc} alt={name} title={name} />
        </div>

        <div className="item__descr flex">
          <div className="item__title">{name}</div>
          <div className="item__footer flex">
            <div className="item__price">{price} грн.</div>
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
};

MenuItem.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  itemData: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default compose(
  connect(null, {
    addToOrder,
  }),
  withRouter
)(MenuItem);
