// import {posteosData} from '../data/posteosData'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import PosteoCard from './PosteoCard'

// const PosteoList = () => {

//     const [posteos, setPosteos] = useState([])

//     useEffect(() => {
//         getPosteos()
      
//     }, [])

//     const getPosteos = () =>{
//         const getPosteosPromise = new Promise((resolve) => { 
//             setTimeout(() => {
//                 resolve( posteosData )
//             }, 2000);
//          })

//          getPosteosPromise.then( data => {
//              setPosteos(data)
//          })
//     }
    


//   return (
//     <div>
//         {posteos.map (p =>  <PosteoCard key={p.id} posteo={p} />)}
//     </div>
//   )
// }

// export default PosteoList

// esto es lo que tengo que copiar y poner arriba 

// import React from "react"
// import Item from "../../Item/Item"

// const ItemList = ({ category }) => {
// 	console.log(category)
// 	return (
// 		<>
// 			<div className="row">
// 				{category &&
// 					category.map((product) => (
// 						<Item
// 							id={product.id}
// 							title={product.title}
// 							price={product.price}
// 							brand={product.brand}
// 							img={product.picUrl}
// 							key={product.id}
// 						/>
// 					))}
// 			</div>
// 		</>
// 	)
// }

// export default ItemList