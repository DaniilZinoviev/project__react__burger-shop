import React from "react";
import { MainPage, EditPage, OrderPage } from "../../pages";
import { connect } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "../../store/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "OrderPage",
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

  render() {
    const { currentPage } = this.state;

    return (
      <React.Fragment>
        <MainPage name={currentPage} changePage={this.changePage} />
        <EditPage name={currentPage} changePage={this.changePage} />
        <OrderPage name={currentPage} changePage={this.changePage} />
      </React.Fragment>
    );
  }
}

export default connect(null, {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
})(App);
