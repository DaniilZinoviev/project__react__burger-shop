import React from "react";
import { MenuItem } from "../components/MenuItem";
import { connect } from "react-redux";
import { Spinner } from "../components/Spinner";
import { ErrorBoundary } from "../components/ErrorBoundary";
import PropTypes from "prop-types";

const MainPage = ({ data, isLoading, error }) => {
  return (
    <section className="app__menu">
      <div className="container">
        <div className="section__head">
          <h2>Меню</h2>
        </div>

        <MainMenu {...{ data, isLoading, error }} />
      </div>
    </section>
  );
};

MainPage.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.func,
  data: PropTypes.array,
};

const MainMenu = ({ data, isLoading, error }) => {
  if (error) {
    return <ErrorBoundary error={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="items-container grid">
      {data.map((item, i) => {
        return <MenuItem itemData={item} key={i} />;
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
