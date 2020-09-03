import React from "react";
import MenuItem from "../components/MenuItem";

function MenuItems({ data, addToOrder, changePage }) {
  return (
    <div className="items-container grid">
      {data.map(function (item, i) {
        return (
          <MenuItem
            itemData={item}
            key={i}
            changePage={changePage}
            addToOrder={addToOrder}
          />
        );
      })}
    </div>
  );
}

export default MenuItems;
