import React from 'react'
import {useState} from 'react'
import './recommendedGroups.css'

function RecommendedGroups({item}) {
    const [cond,setCond]=useState(false)
    const [text,setText]=useState('follow');
    const handleClick=()=>{
        setCond(!cond);
        if(cond===true){
            setText('follow')
        }
        else{
            setText('following')
        }
       
    }
  return (
    <div className='rec-com'>
        <div className='rec-cont'>
            <div className='rec-group'>
                <img src={item.img} alt='group'/>
                <p className='rec-text'>{item.text}</p>
            </div>
           
            <button 
            className={cond===true?'rec-btn':'rec-button'} 
            onClick={handleClick} >
                {text}
            </button>
        </div>
    </div>
  )
}

export default RecommendedGroups
