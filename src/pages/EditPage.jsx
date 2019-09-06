import React from "react";
import EditSection from "../components/EditSection.jsx"

function EditPage(props) {
    // Should this page be shown or not
    if (props.name !== "EditPage") {
        return null;
    }

    return (
        <section className="app__edit">
            <div className="container">

                <div className="section__head">
                    <h2>Редактировать бургер</h2>
                </div>

                <div className="section__body">

                    <EditSection 
                        productsOrder={props.productsOrder}
                        orderIndex={props.orderIndex}
                        removeFromOrder={props.removeFromOrder}
                        isOpenEditModal={props.isOpenEditModal}
                        addIngredient={props.addIngredient}
                        removeIngredient={props.removeIngredient}
                        openModal={props.openModal}
                        closeModal={props.closeModal}
                        changePage={props.changePage}
                    />

                </div>

                <div className="hidden"></div>

            </div>
        </section>
    )
}

export default EditPage ;