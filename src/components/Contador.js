import React, { useState } from 'react'

const Contador = () => {
    console.log("Aqui hay un render del componente Contador");
    const [count, setCount] = useState(0)

    const addHandler = () => {
        console.log("Se esta sumando"); 
        setCount(count + 1)
     }

     const resHandler = () => {
        console.log("Se esta restando"); 
        setCount(count - 1)
     }

  return (
    <>
        <div>Contador</div>
        <button onClick={resHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
    </>
  )
}

export default Contador

