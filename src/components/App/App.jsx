import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { compose } from "../../utils/compose";

import { MainPage, EditPage, OrderPage } from "../../pages";
import { withApiService } from "../../hocs";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "../../store/actions";

const App = ({
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  apiService,
}) => {
  // Request to json-server
  // My json-server: json-server --watch db.json --port 3001
  useEffect(() => {
    fetchProductsRequest();
    apiService
      .getProducts()
      .then((data) => fetchProductsSuccess(data))
      .catch((error) => fetchProductsError(error));
  }, [
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsError,
    apiService,
  ]);

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
};

export default compose(
  connect(null, {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsError,
  }),
  withApiService
)(App);
