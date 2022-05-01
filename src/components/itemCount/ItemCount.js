import React from 'react';
import { useState } from 'react';
import './itemCount.css';


const ItemCount = ({ onAdd }) => {
  const initial = 1; 
  const stock = 5; 

  
  const [qty, setQty] = useState(initial);

  
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container  mt-3 countainer-compact dropdown-content w-52 bg-base-100 shadow rounded-box">
      <div className="count-container__contador">
        <button
          className="count-container__button "
          onClick={() => addProduct(-1)}
          
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button "
          onClick={() => addProduct(+1)}
          
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary btn btn-primary btn-block"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
