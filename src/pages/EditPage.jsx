import React from "react";
import { EditSection } from "../components/EditSection";

const EditPage = ({ name, changePage }) => {
  // Should this page be shown or not
  if (name !== "EditPage") {
    return null;
  }

  return (
    <section className="app__edit">
      <div className="container">
        <div className="section__head">
          <h2>Редактировать бургер</h2>
        </div>

        <div className="section__body">
          <EditSection changePage={changePage} />
        </div>

        <div className="hidden"></div>
      </div>
    </section>
  );
};

export default EditPage;
