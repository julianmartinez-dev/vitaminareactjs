// import React from 'react'
// import ItemCount from '../itemCount/ItemCount'

// const CuadroCard = ( props ) => {

//     const {title, lugar, precio, descripcion, img} = props.cuadro

//   return (
//     // acomodar bien el card porque asi no va
//     <div class="card justify-center w-96 mx-6 mt-6 shadow-xl">
//       <figure><img src= {img} alt="Cuadro Caminos"/></figure>
//       <div class="card-body">
//       <h2 class="card-title"><strong> {title} </strong></h2>
//       <strong> {lugar} </strong>
//       <div> {precio} </div>
//       <div> {descripcion} </div>
//       <div class="card-actions justify-end">
//         <button class="btn btn-dark">Comprar</button>
//     </div>
//   </div>
// </div>
//   )
// }

// export default CuadroCard


// Tengo que intentar acomodar lo de arriba guiandome con esta info que tengo abajo 
// Prestar atencion e ir cambiando todos los nombres
// Cambiar todos los nombres necesarios y hacer un rafce nuevo y desp ir guiandome con lo que yo ya habia hecho y lo del tutor 

// import React from "react"
// import { Link } from "react-router-dom"

// const Item = ({ title, price, img, brand, id }) => {
// 	return (
// 		<div className="col itemListCol mb-2 ">
// 			<div className="d-flex justify-content-center align-items-center">
// 				<div className="card p-3 w-100">
// 					<div className="d-flex justify-content-evenly align-items-center ">
// 						<div className="mt-2">
// 							<h4 className="text-uppercase">${price}</h4>
// 							<div className="mt-5">
// 								<h5 className="text-uppercase mb-0">{title}</h5>
// 								<h1 className="main-heading mt-0">{brand}</h1>
// 							</div>
// 						</div>
// 						<div className="image">
// 							<img src={img} width="200" alt="" />
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col ver-mas mt-4">
// 							<Link
// 								to={`/item/${id}`}
// 								className="w-100 btn d-block bg-primary text-white"
// 							>
// 								Ver mas
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default Item