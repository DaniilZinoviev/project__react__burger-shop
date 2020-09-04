const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

const updateProducts = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state.products,
        items: [],
        isLoading: true,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state.products,
        items: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state.products,
        items: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state.products;
  }
};

export default updateProducts;
