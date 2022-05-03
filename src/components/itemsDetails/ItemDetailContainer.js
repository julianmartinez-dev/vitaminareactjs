// import CuadroCard from './CuadroCard'
// import {cuadrosData} from '../../data/cuadrosData'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const CuadroDetailContainer = () => {

//     const [cuadros, setCuadros] = useState([])

//     useEffect(() => {
//         getCuadros()
      
//     }, [])

//     const getCuadros = () =>{
//         const getCuadrosPromise = new Promise((resolve) => { 
//             setTimeout(() => {
//                 resolve( cuadrosData )
//             }, 2000);
//          })

//          getCuadrosPromise.then( data => {
//              setCuadros(data)
//          })
//     }
    


//   return (
//     <div>
//         {cuadros.map (c =>  <CuadroCard key={c.id} cuadro={c} />)}
//     </div>
//   )
// }

// export default CuadroDetailContainer


// Revisar esto y acomodar el render de item list. Intentar copiar todo y ver como acomodarlo arriba

// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { getItem } from "../../../services/asyncmock"
// import ItemDetail from "./ItemDetail/ItemDetail"

// const ItemDetailContainer = () => {
// 	const [product, setProduct] = useState({})
// 	const { id } = useParams()

// 	useEffect(() => {
// 		if (id === undefined) {
// 			getItem().then((resp) => setProduct(resp))
// 		} else {
// 			getItem().then((resp) => setProduct(resp[id]))
// 		}
// 	}, [id])

// 	console.log(product)

// 	return (
// 		<div className="container mt-3">
// 			<ItemDetail product={product} />
// 		</div>
// 	)
// }

// export default ItemDetailContainer