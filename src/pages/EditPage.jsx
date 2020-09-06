import React from "react";
import { EditSection } from "../components/EditSection";

const EditPage = () => {
  return (
    <section className="app__edit">
      <div className="container">
        <div className="section__head">
          <h2>Редактировать бургер</h2>
        </div>

        <div className="section__body">
          <EditSection />
        </div>

        <div className="hidden"></div>
      </div>
    </section>
  );
};

export default EditPage;
