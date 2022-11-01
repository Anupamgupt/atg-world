import React from 'react'
import whole from '../assets/whole.png'
import joseph from '../assets/joseph.png'
import search from '../assets/icon/search.svg'
import drop from '../assets/icon/drop.svg'
import shape from '../assets/icon/shape.svg'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar({sign}) {

    
  return (
    <nav className='navbar'>
        <div className='left-nav'>
            <img src={whole} alt='logo' className='logo'></img>
        </div>
        <div className='center-nav'>
            <div className='input-form'>
                <span>
                    <img src={search} size='16.03px' color='#7A7A7A' className='search' alt='search'/>
                </span>
                
                <input type='text' className='input-box' placeholder='Search for your favorite groups in ATG'></input>
            </div>
        </div>
        <div className='right-nav'>
            {sign===false?(
                 <p className='no-col'>
                 Create account.
                 <Link to='/sign-up' className='free'>
                     <span className='col' >It's free!</span>
                     
                 </Link>
                 <span>
                         <img src={drop} alt='drop' className='drop'/>
                 </span>
             </p>
            ):(
                <div className='si'>
                     <img src={joseph} alt='jo' className='jo'/>
                     <p className='sg'>Siddharth Goyal</p>
                     <span>
                         <img src={drop} alt='drop' className='drop'/>
                    </span>
                </div>
               
                
            )}
           
           
           
        </div>
        <Link to='/sign-up' className='shape'><img src={shape} alt='shape'  /> </Link>
    </nav>
  )
}

export default Navbar
