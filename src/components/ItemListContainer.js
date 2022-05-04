
import React from 'react'

const ItemListContainer = () => {
  return (
    <div>
        <h1 className="normal-case text-xl mb-2">Lista de productos en venta!</h1>
        <p>Aqui vas a poder encontrar las mejores imagenes y productos para vos</p>
    </div>
  )
}

export default ItemListContainer

// Chequear esto de abajo y fijarme como lo puedo acomodar arriba y que funcione

// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { getItem } from "../../../services/asyncmock"
// import ItemList from "./ItemList/ItemList"

// const ItemListContainer = () => {
// 	const { categoryId } = useParams()
// 	const [category, setCategory] = useState()

// 	useEffect(() => {
// 		if (categoryId === undefined) {
// 			getItem().then((resp) => setCategory(resp))
// 		} else {
// 			getItem().then((resp) =>
// 				setCategory(resp.filter((product) => product.category === categoryId))
// 			)
// 		}
// 	}, [categoryId])

// 	return (
// 		<>
// 			<div className="container mt-4">
// 				<ItemList category={category} />
// 			</div>
// 		</>
// 	)
// }

// export default ItemListContainer