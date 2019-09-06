import React from "react";
import MenuItem from "../components/MenuItem";

function MenuItems(props) {
    
    return (
        <div className="items-container grid">

            {props.data.map(function(item, i) {
                return (
                    <MenuItem 
                        itemData={item} 
                        key={i}
                        changePage={props.changePage}
                        addToOrder={props.addToOrder}
                    />
                )
            })}

        </div>
    )
}

export default MenuItems ;