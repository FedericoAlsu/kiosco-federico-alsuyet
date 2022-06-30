import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/item.css";


const Item = (prop) => {
  console.log(prop);
  if (typeof(prop.id) !== 'undefined') {
  return (
    <div className='item col-md-4 px-0'>
      <h4>{prop.title}</h4>
      <img src={prop.pictureUrl} className="w-75 mx-auto d-block"/>
      <p>{prop.description}</p>
      <button type="button" className="btn btn-primary w-100">Ver descripcion del producto</button>
      <p className='stock'>Stock disponible: {prop.stock}</p>
    </div>
  );
  }
};

export default Item;