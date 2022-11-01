import React from 'react'
import './leftcontent.css'
import { MdOutlineLocationOn }from 'react-icons/md'
import edit from '../assets/icon/edit.svg'
import exclaim from '../assets/icon/exclaim.svg'
import cross from '../assets/icon/cross.svg'
import thumb from '../assets/icon/thumbs.svg'
import { Group } from '../assets/data/PostData'
import RecommendedGroups from './RecommendedGroups'
import {useState} from 'react'

function LeftContent({sign}) {
    const [editify,setEditify]=useState(false);
    const [text,setText]=useState('Noida,India')
  
    const handleEdit=()=>{
        setEditify(true)
    }
    const handleChange=(e)=>{
        setText(e.target.value)
        
    }

  return (
    <div className='lo'>
        <div className="leftloc">
            <MdOutlineLocationOn className='out'/>
            {editify===true?
            
            <input type='text' className='hello' placeholder='Enter your location'
                onChange={handleChange}
            ></input> :
            <h5 className='leftlocc'>{text}</h5>
            }
            
            {/*    */}
            <button className='edit' onClick={handleEdit}>
                {editify===true
                ?<img src={cross} alt='cross'/>
                : <img src={edit} alt='edit'  ></img>}
                
                
            </button>
            
        </div>
        <div className='leftdown'>
        <img src={exclaim} alt='exclaim' className='exclaim'/>
            <p className='para'> 
                 Your location will help us serve better and extend a personalised experience.
            </p>
        </div>
        {sign&&( <div className='recommend'>
            <div className='rec-head'>
                <img src ={thumb} alt='thumb'/>
                <p className='rp'>RECOMMENDER GROUPS</p>
            </div>
            <div >
                {Group.map((item)=>(
                    <RecommendedGroups item={item} key={item.id}/>
                ))}
                
            </div>
            <div className='seemore'>
                See More...
             </div>
        </div>)}
       
       
    </div>
  )
}

export default LeftContent
