import React from "react";
import Popup from "reactjs-popup";
import IngredientsList from "./IngredientsList.jsx";
import Ingredient from "./Ingredient.jsx";

const EditSection = ({
  changePage,
  removeFromOrder,
  orderIndex,
  productsOrder,
  removeIngredient,
  openModal,
  isOpenEditModal,
  closeModal,
  addIngredient,
}) => {
  const handleCancel = () => {
    changePage("MainPage");
    removeFromOrder(orderIndex);
  };
  const handleConfirm = () => {
    changePage("OrderPage");
  };
  // Get current product-object
  let product = productsOrder[orderIndex];

  return (
    <div className="edit-wrap">
      <div className="edit flex">
        <div className="edit__item">
          <div className="edit__img">
            <img src={product.imgSrc} alt={product.name} title={product.name} />
          </div>
          <h3 className="edit__name">{product.name}</h3>
          <p className="edit__price">Сумма: {product.price} грн.</p>
        </div>
        <div className="edit__ingredients-wrap">
          <h3>Ингридиенты:</h3>

          <ul className="ingredients-list">
            <IngredientsList
              ingredients={product.ingredients}
              removeIngredient={removeIngredient}
            />
          </ul>

          <button className="edit__btn-add btn" onClick={openModal}>
            Добавить
          </button>
          <Popup
            open={isOpenEditModal}
            onClose={closeModal}
            className="edit__modal"
            position="right center"
            modal={true}
          >
            <ul className="edit_available-ingredients">
              <Ingredient
                addIngredient={addIngredient}
                closeModal={closeModal}
                name="Сыры"
                ingredients={[
                  "Сыр (голландский)",
                  "Сыр (козий)",
                  "Сыр (с плесенью)",
                ]}
              />
              <Ingredient
                addIngredient={addIngredient}
                closeModal={closeModal}
                name="Котлеты"
                ingredients={[
                  "Котлета (рыбная)",
                  "Котлета (говядина)",
                  "Котлета (курица)",
                ]}
              />
              <Ingredient
                addIngredient={addIngredient}
                closeModal={closeModal}
                name="Овощи"
                ingredients={["Огурец (солёный)", "Помидорки", "Салат"]}
              />
              <Ingredient
                addIngredient={addIngredient}
                closeModal={closeModal}
                name="Соусы"
                ingredients={[
                  "Соус Ранч",
                  "Соус Торриси",
                  "Соус Гуакамоле",
                  "Соус Биг-мак",
                ]}
              />
              <Ingredient
                addIngredient={addIngredient}
                closeModal={closeModal}
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

export default EditSection;
