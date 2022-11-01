import React from 'react'
import './home.css'
import right from '../assets/icon/right.svg'
import homeimg  from '../assets/homeimg .png'
import homer from '../assets/home.png'
import PostNav from '../components/PostNav'
import ContentPost from '../components/ContentPost'
function Home({sign}) {
  return (
    <>
        <div className='container'>
            <div className='home'>
                <img src={homeimg} alt='home' className='homeimg'/>
                <img src={homer} alt='home' className='homey'/>
                
            </div>
            <div className='home-content'>
                    <img src={right} className='ri' alt='ri'/>
                    <div className='cont'>
                        <h1>Computer Engineering</h1>
                        <h4>142,765 Computer Engineers follow this</h4>
                    </div>
            </div>
        </div>
          <div className='dd'>
           <PostNav/>
          </div>
         
        
          <ContentPost sign={sign} className='conte'/>
       
       
    </>
    
  )
}

export default Home
