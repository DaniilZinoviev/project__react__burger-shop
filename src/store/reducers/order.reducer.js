const initialState = {
  order: [],
  index: -1,
};

const addIngredient = (order, index, name) => {
  let newOrder = [...order];
  newOrder[index].ingredients.push(name);
  return newOrder;
};

const removeIngredient = (order, index, name) => {
  let newOrder = order.map((item, i) => {
    if (i === index) {
      item.ingredients = item.ingredients.filter((iName) => iName !== name);
    }
    return item;
  });
  return newOrder;
};

const updateOrder = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  const order = state.order.order;
  const index = state.order.index;

  switch (action.type) {
    case "CLEAN_ORDER":
      return {
        ...state.order,
        order: [],
        index: -1,
      };

    case "REMOVE_FROM_ORDER":
      return {
        ...state.order,
        order: [...order.slice(0, index), ...order.slice(index)],
        index: index - 1,
      };

    case "ADD_TO_ORDER":
      return {
        ...state.order,
        order: [...order, action.payload],
        index: index + 1,
      };

    case "REMOVE_INGREDIENT":
      return {
        ...state.order,
        order: removeIngredient(order, index, action.payload),
      };

    case "ADD_INGREDIENT":
      return {
        ...state.order,
        order: addIngredient(order, index, action.payload),
      };

    case "CHANGE_ORDER_INDEX":
      return {
        ...state.order,
        index: action.payload,
      };

    default:
      return state.order;
  }
};

export default updateOrder;
