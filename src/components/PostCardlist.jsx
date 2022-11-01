import React from 'react'
import Postcard from './Postcard'
import './postcard.css'
import {Data} from '../assets/data/PostData'

function PostCardlist() {
   
  return (
    <div className='data'>
        {Data.map((item)=>(
            // console.log(item)
            <Postcard key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default PostCardlist
