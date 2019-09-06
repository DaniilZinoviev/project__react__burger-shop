import React from "react";

function MenuItem(props) {
    function handleClick() {
        props.addToOrder(props.itemData);
        props.changePage("EditPage");
    }

    return (
        <div className="item-wrap">
            <div className="item flex">
                <div className="item__img">
                    <img src={props.itemData.imgSrc} alt={props.itemData.name} title={props.itemData.name} />
                </div>

                <div className="item__descr flex">
                    <div className="item__title">{props.itemData.name}</div>
                    <div className="item__footer flex">
                        <div className="item__price">{props.itemData.price} грн.</div>
                        <button 
                            className="item__add btn"
                            title="Редактировать начинку"
                            onClick={handleClick}
                        >+</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MenuItem;