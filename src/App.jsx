import React from "react";
import "./fonts.css";
import "./main.css";
import "./media.css";
import MainPage from "./pages/MainPage.jsx";
import EditPage from "./pages/EditPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "OrderPage",
      products: [],
      productsOrder: [],
      orderIndex: -1,
      isOpenEditModal: false,
    };
  }

  // Request to json-server
  // My json-server: json-server --watch db.json --port 3001
  componentDidMount() {
    let url = "http://localhost:3001/products";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ products: data }));
  }

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  changeOrderIndex = (index) => {
    this.setState({ orderIndex: index });
  };

  _getProductsOrder = () => {
    return this.state.productsOrder.slice();
  };

  _getOrderIndex = () => {
    return this.state.orderIndex;
  };

  addIngredient = (name) => {
    // Push ingredient name to current product of products order
    let productsOrder = this._getProductsOrder();
    productsOrder[this._getOrderIndex()].ingredients.push(name);
    this.setState({ productsOrder: productsOrder });
  };

  removeIngredient = (name) => {
    // Splice ingredient name from current product of products order
    let productsOrder = this._getProductsOrder(),
      orderIndex = this._getOrderIndex(),
      ingredientIndex = productsOrder[orderIndex].ingredients.indexOf(name);

    productsOrder[orderIndex].ingredients.splice(ingredientIndex, 1);
    this.setState({ productsOrder: productsOrder });
  };

  addToOrder = (product) => {
    // Push product to produts order
    let productsOrder = this._getProductsOrder();
    productsOrder.push(product);
    this.changeOrderIndex(productsOrder.length - 1);
    this.setState({ productsOrder: productsOrder });
  };

  removeFromOrder = (productIndex) => {
    let productsOrder = this._getProductsOrder();
    productsOrder.splice(productIndex, 1);
    this.setState({ productsOrder: productsOrder });
  };

  cleanOrder = () => {
    this.setState({ productsOrder: [] });
  };

  openModal = () => {
    this.setState({ isOpenEditModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenEditModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <MainPage
          name={this.state.currentPage}
          data={this.state.products}
          changePage={this.changePage}
          addToOrder={this.addToOrder}
        />
        <EditPage
          name={this.state.currentPage}
          productsOrder={this.state.productsOrder}
          orderIndex={this.state.orderIndex}
          removeFromOrder={this.removeFromOrder}
          isOpenEditModal={this.state.isOpenEditModal}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          openModal={this.openModal}
          closeModal={this.closeModal}
          changePage={this.changePage}
        />
        <OrderPage
          name={this.state.currentPage}
          productsOrder={this.state.productsOrder}
          changeOrderIndex={this.changeOrderIndex}
          removeFromOrder={this.removeFromOrder}
          changePage={this.changePage}
          cleanOrder={this.cleanOrder}
        />
      </React.Fragment>
    );
  }
}

export default App;
