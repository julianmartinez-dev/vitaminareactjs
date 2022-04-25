import React from 'react';
import { useState } from 'react';

import '../App.css';

const ItemCount = ({ onAdd }) => {
  const initial = 1; //El número inicial de un contador, por sentido común tiene que ser mayor o igual a 1
  const stock = 5; //Limita el count, pensado en el stock de un producto

  //hook de estado
  const [qty, setQty] = useState(initial);

  //esta función recibe por parámetro un número que se sumará al valor inicial
  //del estado qty. De esta manera podremos sumar y restar con una misma función
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          //disabled es una propiedad de los inputs y buttons en html, por defecto disabled tiene un valor booleano en true, sin embargo podemos aprovechar que en jsx podemos mezclar html y javascript para aplicar un ternario que devolverá un true si es que el valor inicial y la cantidad son la misma
          //Esto hará que no podamos seguir ejecutando la función para restar
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          //en este otro botón, aplico un ternario que devolverá true cuando la cantidad sea igual al stock, esto evitará que pueda seguir sumando. Esto es muy útil porque reduzco el costo computacional ya que evito directamente que se ejecute la función addProduct.
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;