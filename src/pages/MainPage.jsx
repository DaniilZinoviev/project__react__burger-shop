import React from "react";
import { MenuItem } from "../components/MenuItem";
import { connect } from "react-redux";
import { Spinner } from "../components/Spinner";
import { ErrorBoundary } from "../components/ErrorBoundary";

const MainPage = ({ name, data, isLoading, error, changePage }) => {
  // Should this page be shown or not
  if (name !== "MainPage") {
    return null;
  }

  return (
    <section className="app__menu">
      <div className="container">
        <div className="section__head">
          <h2>Меню</h2>
        </div>

        <MainMenu {...{ data, isLoading, error, changePage }} />
      </div>
    </section>
  );
};

const MainMenu = ({ data, isLoading, error, changePage }) => {
  if (error) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="items-container grid">
      {data.map((item, i) => {
        return <MenuItem itemData={item} key={i} changePage={changePage} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ products: { items, isLoading, error } }) => {
  return {
    data: items,
    isLoading,
    error,
  };
};

export default connect(mapStateToProps)(MainPage);
