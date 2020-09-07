import React, { useContext } from "react";
import { ApiServiceContext } from "../contexts";

const withApiService = (Component) => (props) => {
  const apiService = useContext(ApiServiceContext);
  return <Component {...props} apiService={apiService} />;
};

export default withApiService;
