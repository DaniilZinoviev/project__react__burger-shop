import updateProducts from "./products.reducer";
import updateOrder from "./order.reducer";

const reducer = (state, action) => {
  return {
    products: updateProducts(state, action),
    order: updateOrder(state, action),
  };
};

export default reducer;
