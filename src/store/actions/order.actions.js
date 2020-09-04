const cleanOrder = () => {
  return {
    type: "CLEAN_ORDER",
  };
};

const removeFromOrder = (productIndex) => {
  return {
    type: "REMOVE_FROM_ORDER",
    payload: productIndex,
  };
};

const addToOrder = (product) => {
  return {
    type: "ADD_TO_ORDER",
    payload: product,
  };
};

const removeIngredient = (name) => {
  return {
    type: "REMOVE_INGREDIENT",
    payload: name,
  };
};

const addIngredient = (name) => {
  return {
    type: "ADD_INGREDIENT",
    payload: name,
  };
};

const changeOrderIndex = (index) => {
  return {
    type: "CHANGE_ORDER_INDEX",
    payload: index,
  };
};

export {
  cleanOrder,
  removeFromOrder,
  addToOrder,
  removeIngredient,
  addIngredient,
  changeOrderIndex,
};
