import React, { useState } from "react";
import Popup from "reactjs-popup";
import { IngredientList } from "../IngredientList";
import { Ingredient } from "../Ingredient";
import {
  addIngredient,
  removeFromOrder,
  removeIngredient,
} from "../../store/actions";
import { connect } from "react-redux";
import { compose } from "../../utils/compose";
import { withRouter } from "react-router-dom";

const EditSection = ({
  removeFromOrder,
  orderIndex,
  order,
  removeIngredient,
  addIngredient,
  history,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Get current product-object
  const product = order[orderIndex];
  if (!product) {
    history.push("/");
    return null;
  }

  const { imgSrc, name, price, ingredients } = product;

  const handleCancel = () => {
    history.push("/");
    removeFromOrder(orderIndex);
  };
  const handleConfirm = () => {
    history.push("/order");
  };
  const handleAddIngredient = (ingredient) => {
    addIngredient(ingredient);
    setIsOpenModal(false);
  };

  return (
    <div className="edit-wrap">
      <div className="edit flex">
        <div className="edit__item">
          <div className="edit__img">
            <img src={imgSrc} alt={name} title={name} />
          </div>
          <h3 className="edit__name">{name}</h3>
          <p className="edit__price">Сумма: {price} грн.</p>
        </div>
        <div className="edit__ingredients-wrap">
          <h3>Ингридиенты:</h3>

          <ul className="ingredients-list">
            <IngredientList
              ingredients={ingredients}
              removeIngredient={removeIngredient}
            />
          </ul>

          <button
            className="edit__btn-add btn"
            onClick={() => setIsOpenModal(true)}
          >
            Добавить
          </button>
          <Popup
            open={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            className="edit__modal"
            position="right center"
            modal={true}
          >
            <ul className="edit_available-ingredients">
              <Ingredient
                handleClick={handleAddIngredient}
                name="Сыры"
                ingredients={[
                  "Сыр (голландский)",
                  "Сыр (козий)",
                  "Сыр (с плесенью)",
                ]}
              />
              <Ingredient
                handleClick={handleAddIngredient}
                name="Котлеты"
                ingredients={[
                  "Котлета (рыбная)",
                  "Котлета (говядина)",
                  "Котлета (курица)",
                ]}
              />
              <Ingredient
                handleClick={handleAddIngredient}
                name="Овощи"
                ingredients={["Огурец (солёный)", "Помидорки", "Салат"]}
              />
              <Ingredient
                handleClick={handleAddIngredient}
                name="Соусы"
                ingredients={[
                  "Соус Ранч",
                  "Соус Торриси",
                  "Соус Гуакамоле",
                  "Соус Биг-мак",
                ]}
              />
              <Ingredient
                handleClick={handleAddIngredient}
                name="Разное"
                ingredients={["Булочка", "Бекон", "Отбивная", "Красный перец"]}
              />
            </ul>
          </Popup>
        </div>
      </div>

      <div className="edit-footer edit__buttons">
        <button
          className="btn edit__btn-cancel btn-cancel"
          onClick={() => handleCancel()}
        >
          Отменить
        </button>
        <button
          className="btn edit__btn-confirm btn-confirm"
          onClick={() => handleConfirm()}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ order: { order, index } }) => {
  return {
    order,
    orderIndex: index,
  };
};

export default compose(
  connect(mapStateToProps, {
    addIngredient,
    removeFromOrder,
    removeIngredient,
  }),
  withRouter
)(EditSection);
