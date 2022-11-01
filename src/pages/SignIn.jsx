import React,{useEffect} from 'react'
import './signIn.css'
import { useNavigate } from 'react-router-dom'
import PostNav from '../components/PostNav'
import ContentPost from '../components/ContentPost'
import cross2 from '../assets/icon/cross2.svg'
import group from '../assets/Group.png'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import {AiOutlineEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function SignIn({myfunction,sign}) {
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
          <div className='mainsign'>
            <div className='donesign'>
              <Link to='/'><img src={cross2} alt='cross' className='cross2'/></Link>
              <div className='signupbox'>
                <div className='signup-text'>
                  <p className='para1'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <div className='signupheader'>
                  <div className='create'>
                    <p className='ca'>Sign In</p>
                  
                  </div>
                  <p className='already'>Don’t have an account yet? 
                  <Link to='/sign-up' className='already-signin'><span > Create new for free! </span></Link> </p>
                </div>
                <div className='signup-done'>
                  <div className='every'>
                    <div className='form'>
                      <form>
                        
                        <div className='em'>
                          <input type='email' placeholder='Email' className='in'></input>
                          <div className='password'>
                            <input type='password' placeholder='Password' className='in' autoComplete="on">
                            
                            </input>
                            <AiOutlineEye className='viseye'/>
                          </div>
                      
                       
                        </div>
                        
                      </form>
                    </div>
                    <div className='buttons'>
                      <button className='ca-btn' onClick={myfunction} >Sign In</button>
                      <button className='face'><div className='faceb'><img src ={facebook} alt='face'/><p>Sign in with Facebook</p></div></button>
                      <button className='gog' ><div className='faceb'><img src ={google} alt='gog'/><p>Sign in with Google</p></div></button>
                    </div>
                    <p className='forget'>Forgot Password?</p>
                  </div>
                  <div>
                    <img src ={group} alt='group' className='pic'/>
                   
                  </div>              
                </div>
              </div>      
            </div>
          </div>
        </div>

  )
}

export default SignIn
