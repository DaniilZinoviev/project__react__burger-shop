import React from "react";

const ErrorBoundary = ({ error }) => {
  console.log(`ErrorBoundary: Error!`, error);
  return (
    <div>
      An unexptected error has been occured! Please, look at the console for
      details.
    </div>
  );
};

export default ErrorBoundary;
