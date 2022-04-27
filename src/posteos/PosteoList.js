import {posteosData} from '../data/posteosData'
import { useState } from 'react'
import { useEffect } from 'react'
import PosteoCard from './PosteoCard'

const PosteoList = () => {

    const [posteos, setPosteos] = useState([])

    useEffect(() => {
        getPosteos()
      
    }, [])

    const getPosteos = () =>{
        const getPosteosPromise = new Promise((resolve) => { 
            setTimeout(() => {
                resolve( posteosData )
            }, 2000);
         })

         getPosteosPromise.then( data => {
             setPosteos(data)
         })
    }
    


  return (
    <div>
        {posteos.map (p =>  <PosteoCard key={p.id} posteo={p} />)}
    </div>
  )
}

export default PosteoList