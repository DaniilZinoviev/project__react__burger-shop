import React from "react";
import { MainPage, EditPage, OrderPage } from "../../pages";
import { connect } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "../../store/actions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
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

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/order" component={OrderPage} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
})(App);
