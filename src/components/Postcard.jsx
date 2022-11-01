import React from 'react'
import './postcard.css'
import location from '../assets/icon/location.svg'
import calender from '../assets/icon/calender.svg'
import more from '../assets/icon/more.svg'
import share from '../assets/icon/share.svg'
import job from '../assets/icon/job.svg'
import {AiOutlineEye} from 'react-icons/ai'

function Postcard({item}) {
    if(item.id<=2){
        return (
            <div className='card'>
                <div className='image'>
                    <img src={item.img} alt='img' className='srcimg'/>
                </div>
                <div className='art'>
                    <h2 className='article'>{item.sticker}</h2>
                </div>
                <div className='text-head'>
                    <h1 className='texthead'>{item.textheading}</h1>
                    <img src={more} alt='more' className='more'></img>
                </div>
                <div className='subtext'>
                    {item.text}
                </div>
                <div className='contfoot'>
                    <div className='name'>
                        <img src={item.person} alt='person'/>
                        <h2 className='proname'>{item.name}</h2>
                    </div>
                    <div className='right-contfoot'>
                        <AiOutlineEye className='eye'/>
                        <h2 className='views'>{item.views}</h2>
                        <button className='sharebtn'><img src={share} alt='share' className='share'></img><p className='s'> share</p></button>
                    </div>           
                </div>
            </div>
          )
    }
    if(item.id===3){
        return (
            <div className='card'>
            <div className='image'>
                <img src={item.img} alt='img' className='srcimg'/>
            </div>
            <div className='art'>
                <h2 className='article'>{item.sticker}</h2>
            </div>
            <div className='text-head'>
                <h1 className='texthead'>{item.textheading}</h1>
                <img src={more} alt='more' className='more more2'></img>
            </div>
           <div className='sub'>
                <div className='calend'>
                    <img src={calender} alt='cal'></img>
                    <h5>Fri,12 Oct,2018</h5>
                </div>
                <div className='loc'>
                    <img src ={location} alt='loc'></img>
                    <h5>Ahmedabad,India</h5>
                </div>
                
           </div>
           <div className='subb'>
                <button className='sub-btn' style={{
                    color:'#E56135',
                }}>Visit Website</button>
           </div>
          
            <div className='contfoot'>
                <div className='name'>
                    <img src={item.person} alt='person'/>
                    <h2 className='proname'>{item.name}</h2>
                </div>
                <div className='right-contfoot'>
                    <AiOutlineEye className='eye'/>
                    <h2 className='views'>{item.views}</h2>
                    <button className='sharebtn'><img src={share} alt='share' className='share'></img><p className='s'> share</p></button>
                </div>           
            </div>
        </div>
      )

    
    }

    if(item.id===4){
        return (
            <div className='card'>
           
            <div className='art'>
                <h2 className='article'>{item.sticker}</h2>
            </div>
            <div className='text-head'>
                <h1 className='texthead'>{item.textheading}</h1>
                <img src={more} alt='more' className='more more2'></img>
            </div>
           <div className='sub'>
                <div className='calend'>
                    <img src={job} alt='cal'></img>
                    <h5>Fri,12 Oct,2018</h5>
                </div>
                <div className='loc'>
                    <img src ={location} alt='loc'></img>
                    <h5>Ahmedabad,India</h5>
                </div>
                
           </div>
           <div className='subb'>
                <button className='sub-btn' style={{
                    color:'#02B875',
                }}>Apply on Timesjobs</button>  
           </div>
           
            <div className='contfoot'>
                <div className='name'>
                    <img src={item.person} alt='person'/>
                    <h2 className='proname'>{item.name}</h2>
                </div>
                <div className='right-contfoot'>
                    <AiOutlineEye className='eye'/>
                    <h2 className='views'>{item.views}</h2>
                    <button className='sharebtn'><img src={share} alt='share' className='share'></img><p className='s'> share</p></button>
                </div>           
            </div>
        </div>
      )
    }

}

export default Postcard
