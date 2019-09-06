import React from "react";
import OrderProduct from "./OrderProduct.jsx";

function OrderPage(props) {
    
    if (props.productsOrder.length === 0 ) {
        return (<h2 className="order__empty-h2">Отсутствуют заказы</h2>)
    }

    return (
        <div className="order__products">
            {props.productsOrder.map(function(product, i) {
                return  (<OrderProduct 
                            key={i} 
                            index={i}
                            data={product}
                            changeOrderIndex={props.changeOrderIndex}
                            removeFromOrder={props.removeFromOrder}
                        />)
            })}
        </div>
    )
}

export default OrderPage ;