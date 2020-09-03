import React from "react";
import MenuItems from "../components/MenuItems";

const MainPage = (props) => {
  // Should this page be shown or not
  if (props.name !== "MainPage") {
    return null;
  }

  return (
    <section className="app__menu">
      <div className="container">
        <div className="section__head">
          <h2>Меню</h2>
        </div>

        <MenuItems
          data={props.data}
          changePage={props.changePage}
          addToOrder={props.addToOrder}
        />
      </div>
    </section>
  );
};

export default MainPage;
