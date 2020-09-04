import React from "react";
import { MainPage, EditPage, OrderPage } from "../../pages";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "OrderPage",
      // productsOrder: [],
      // orderIndex: -1,
      isOpenEditModal: false,
    };
  }

  // Request to json-server
  // My json-server: json-server --watch db.json --port 3001
  componentDidMount() {
    const {
      fetchProductsRequest,
      fetchProductsSuccess,
      fetchProductsError,
    } = this.props;

    fetchProductsRequest();

    const url = "http://localhost:3001/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => fetchProductsSuccess(data))
      .catch((error) => fetchProductsError(error));
  }

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  // changeOrderIndex = (index) => {
  //   this.setState({ orderIndex: index });
  // };

  // @todo
  // _getProductsOrder = () => {
  //   return this.state.productsOrder.slice();
  // };

  _getOrderIndex = () => {
    return this.state.orderIndex;
  };

  // @todo
  // addIngredient = (name) => {
  //   // Push ingredient name to current product of products order
  //   let productsOrder = this._getProductsOrder();
  //   productsOrder[this._getOrderIndex()].ingredients.push(name);
  //   this.setState({ productsOrder: productsOrder });
  // };

  // removeIngredient = (name) => {
  //   // Splice ingredient name from current product of products order
  //   let productsOrder = this._getProductsOrder(),
  //     orderIndex = this._getOrderIndex(),
  //     ingredientIndex = productsOrder[orderIndex].ingredients.indexOf(name);

  //   productsOrder[orderIndex].ingredients.splice(ingredientIndex, 1);
  //   this.setState({ productsOrder: productsOrder });
  // };

  // addToOrder = (product) => {
  //   // Push product to produts order
  //   let productsOrder = this._getProductsOrder();
  //   productsOrder.push(product);
  //   changeOrderIndex(productsOrder.length - 1);
  //   this.setState({ productsOrder: productsOrder });
  // };

  // removeFromOrder = (productIndex) => {
  //   let productsOrder = this._getProductsOrder();
  //   productsOrder.splice(productIndex, 1);
  //   this.setState({ productsOrder: productsOrder });
  // };

  // cleanOrder = () => {
  //   this.setState({ productsOrder: [] });
  // };

  openModal = () => {
    this.setState({ isOpenEditModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenEditModal: false });
  };

  render() {
    const {
      currentPage,
      // productsOrder,
      // orderIndex,
      isOpenEditModal,
    } = this.state;

    const {
      products,
      isLoading,
      error,
      productsOrder,
      orderIndex,
      removeFromOrder,
      addIngredient,
      removeIngredient,
      changeOrderIndex,
      addToOrder,
      cleanOrder,
    } = this.props;

    console.log(`products, isLoading, error`, products, isLoading, error);

    return (
      <React.Fragment>
        <MainPage
          name={currentPage}
          changePage={this.changePage}
          data={products}
          addToOrder={addToOrder}
        />
        <EditPage
          name={currentPage}
          changePage={this.changePage}
          productsOrder={productsOrder}
          orderIndex={orderIndex}
          removeFromOrder={removeFromOrder}
          isOpenEditModal={isOpenEditModal}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
        <OrderPage
          name={currentPage}
          changePage={this.changePage}
          productsOrder={productsOrder}
          changeOrderIndex={changeOrderIndex}
          removeFromOrder={removeFromOrder}
          cleanOrder={cleanOrder}
        />
      </React.Fragment>
    );
  }
}

// connect
const mapStateToProps = (state) => {
  const { products, order } = state;
  return {
    isLoading: products.isLoading,
    error: products.error,
    products: products.items,
    productsOrder: order.order,
    orderIndex: order.index,
  };
};

export default connect(mapStateToProps, actions)(App);
