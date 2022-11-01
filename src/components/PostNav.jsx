import React from 'react'
import { useState } from 'react'
import drop from '../assets/icon/drop.svg'
import group from '../assets/icon/group.svg'
import arrow from '../assets/icon/arrow.svg'


function PostNav() {
  const [id,setId]=useState('1');
  const [cond,setCond]=useState(false)
  const [text,setText]=useState('Leave Group')
  const handleClick=(id)=>{
    setId(id);
  }
  const handleGroup=()=>{
    setCond(!cond);
    if(cond){
      setText('Join Group')
    }
    else{
      setText('Leave Group')
    }
  }

  return (
    <div className='wrapper'>
        <div className='post'>
          <div className="wrap-left">
            <h2 
            className={id==='1'?'post1':'post2' } 
            onClick={()=>handleClick('1')}>All Posts(32)</h2>
            <h2 
            className={id==='2'?'post1':'post2' } 
            onClick={()=>handleClick('2')}>Article</h2>
            <h2 
            className={id==='3'?'post1':'post2' } 
            onClick={()=>handleClick('3')}>Event</h2>
            <h2 
            className={id==='4'?'post1':'post2' } 
            onClick={()=>handleClick('4')}>Education</h2>
            <h2 
            className={id==='5'?'post1':'post2' }  
            onClick={()=>handleClick('5')}>Job</h2>
          </div>
          <div className="wrap-right">
            <button className='btn'>Write a post <span>
              <img src={drop} alt='drop' className='drop-down'/>
              </span> 
            </button>
            <button className={`btn ${cond===false? 'blue':'leave-blue'}`} onClick={handleGroup}><span>
              <img src={cond===false?group:arrow} alt='drop' className='group'/>
              </span>{text}
            </button>
          </div>
        </div>
      
    </div>
  )
}

export default PostNav
