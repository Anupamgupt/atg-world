import React from 'react'
import './signUp.css'
import { useEffect } from 'react'
import PostNav from '../components/PostNav'
import ContentPost from '../components/ContentPost'
import cross2 from '../assets/icon/cross2.svg'
import group from '../assets/Group.png'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import {AiOutlineEye} from 'react-icons/ai'
import {Link,useNavigate} from 'react-router-dom'


function Signup({myfunction,sign}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (sign===true) {   
      navigate("/");
    }
  }, );
 
  return (
      <div className='sign-up'>
          <div className='signback'>
              <PostNav/>
              <ContentPost/>
          </div>
      
        <div className='main-sign'>
          <div className='done'>
            <Link to='/'><img src={cross2} alt='cross' className='cross2'/></Link>
            <div className='signup-box'>
              <div className='signup-text'>
                <p className='para1'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
              </div>
              <div className='signup-header'>
                <div className='create'>
                  <p className='ca'>Create Account</p>
                 
                </div>
                <p className='already'>Already have an account? 
                <Link to='/sign-in' className='already-signin'><span > Sign In</span></Link> </p>
              </div>
              <div className='signup-done'>
                <div className='every'>
                  <div className='form'>
                    <form>
                      <div className='first-name'>
                        <input type='text' placeholder='First Name' className='in fir'></input>
                        <input type='text' placeholder='Last Name' className='in fir'></input>
                      </div>
                      <div className='em'>
                        <input type='email' placeholder='Email' className='in'></input>
                        <div className='password'>
                          <input type='password' placeholder='Password' className='in' autoComplete="on">
                          
                          </input>
                          <AiOutlineEye className='viseye' />
                        </div>
                     
                        <input type='text' placeholder='Confirm Password' className='in'></input>
                      </div>
                      
                    </form>
                  </div>
                  <div className='buttons'>
                    <button className='ca-btn' onClick={myfunction}>Create Account</button>
                    <button className='face'><div className='faceb'><img src ={facebook} alt='face'/><p className='sf'>Sign up with Facebook</p></div></button>
                    <button className='gog' ><div className='faceb'><img src ={google} alt='gog'/><p className='sf'>Sign up with Google</p></div></button>
                  </div>
                </div>
                <div className='picc'>
                  <img src ={group} alt='group' className='pic'/>
                  <p className='privacy'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>              
              </div>
              <p className='privacy2'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>      
          </div>
        </div>
      </div>
   
   
   
  )
}

export default Signup
