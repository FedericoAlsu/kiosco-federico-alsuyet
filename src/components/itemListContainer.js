import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemCount from "./itemCount.js";
import ItemList from "./itemList.js";


const ItemListContainer = (prop) => {
  return (
    <>
      <ItemList />
      {/*<h1 className='text-center'>Lista de productos en desarrollo.</h1>
      <p className='text-center'>{prop.greeting}</p>
      <ItemCount stock='10' initial='2'/>*/}
    </>  
  );
};

export default ItemListContainer;