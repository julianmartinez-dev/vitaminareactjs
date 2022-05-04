
// const Item = ( props ) => {

// const {title, price, img, stock} = props.item

//   return (
//     <div className="card carousel-center mx-6 mt-6 rounded-box">
//   <figure><img src= {img} alt="Album"/></figure>
//   <div className="card-body">
//     <h2 className="card-title"> <strong> {title} </strong> </h2>
//     <strong> {price} </strong>
//      <div> {stock} </div>
//     <div className="card-actions justify-end">
//       <button className="btn btn-dark">Ver</button>
//     </div>
//   </div>
// </div>
//   )
// }

// export default Item

// Tengo que intentar acomodar lo de arriba guiandome con esta info que tengo abajo 
// Prestar atencion e ir cambiando todos los nombres

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