
import ReactDOM from 'react-dom/client';
import promise from 'promise';

import React, {useState, useEffect} from "react";
import Item from "./item.js";
import prod1 from "./img/kinder.jpg<";

const ItemList = (prop) => {

let item = ({"id":1,"Kinder chocolate":"barrita","price":50,"description":"barra de chocolate con leche","pictureUrl":prod1,stock:15});

  const [items,setItems] = useState(0);
  useEffect(() => {
    new Promise(function(resolve) {
        setTimeout(function() {
          setItems(item);
          console.log(item);
        }, 3000);
    });
  });

  return (
    <div className='row justify-content-center py-3'>
      <Item id={items.id} title={items.title} pictureUrl={items.pictureUrl} stock={items.stock} price={items.price} description={items.description}/>
    </div>
  );
};

export default ItemList;