import React, {useState, useEffect} from "react";

import ReactDOM from 'react-dom/client';
import ItemDetail from "./itemDetail.js";
import prod1 from "./img/kinder.jpg";
  

const ItemDetailContainer = (prop) => {
  const [items,setItems] = useState(0);

  let item = ({"title":"Kinder chocolate","price":50,"barrita de chocolate":"TV LCD 22","pictureUrl":prod1,"text":"Barrita de chocolate con leche "});
  const promesa = new Promise((resolve) => {
        setTimeout(function() {
          resolve(item);
        }, 2000);
  });

  promesa.then((result)=>{
    setItems(result);
  });
  
  return (
    <>
      <ItemDetail title={items.title} price={items.price} discount={items.discount} description={items.description} pictureUrl={items.pictureUrl} text={items.text}/>
    </>  
  );
};

export default ItemDetailContainer;