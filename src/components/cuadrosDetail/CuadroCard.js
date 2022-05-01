import React from 'react'

const CuadroCard = ( props ) => {

    const {title, lugar, precio, descripcion, img} = props.cuadro

  return (
    // acomodar bien el card porque asi no va
    <div class="card card-side  w-96 card-center mx-6 mt-6 shadow-xl">
      <figure><img src= {img} alt="Cuadro Caminos"/></figure>
      <div class="card-body">
      <h2 class="card-title"><strong> {title} </strong></h2>
      <strong> {lugar} </strong>
      <div> {precio} </div>
      <div> {descripcion} </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
  )
}

export default CuadroCard
