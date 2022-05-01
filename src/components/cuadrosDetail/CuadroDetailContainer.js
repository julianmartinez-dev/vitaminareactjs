import CuadroCard from './CuadroCard'
import {cuadrosData} from '../../data/cuadrosData'
import { useState } from 'react'
import { useEffect } from 'react'

const CuadroDetailContainer = () => {

    const [cuadros, setCuadros] = useState([])

    useEffect(() => {
        getCuadros()
      
    }, [])

    const getCuadros = () =>{
        const getCuadrosPromise = new Promise((resolve) => { 
            setTimeout(() => {
                resolve( cuadrosData )
            }, 2000);
         })

         getCuadrosPromise.then( data => {
             setCuadros(data)
         })
    }
    


  return (
    <div>
        {cuadros.map (c =>  <CuadroCard key={c.id} cuadro={c} />)}
    </div>
  )
}

export default CuadroDetailContainer