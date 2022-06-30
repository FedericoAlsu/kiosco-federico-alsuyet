import React from 'react';
import ReactDOM from 'react-dom/client';


const ItemDetail = (prop) => {
  return (
    <div className="row justify-content-center text-start">
      <div className='col-md-4'>
        <img src={prop.pictureUrl} className="w-100" />
      </div>
      <div className='col-md-4 pt-5'>
        <h3>{prop.title}</h3>
        <p className='fs-5 text-success fw-bold'>${prop.price}</p>
        <span>{prop.discount} de descuento</span>
        <p>Descripcion del producto: <br/>{prop.text}</p>

      </div>
    </div> 
  );
};

export default ItemDetail;