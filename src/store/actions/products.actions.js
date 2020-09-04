const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

const fetchProductsError = (error) => {
  return {
    type: "FETCH_PRODUCTS_ERROR",
    payload: error,
  };
};

export { fetchProductsRequest, fetchProductsSuccess, fetchProductsError };
