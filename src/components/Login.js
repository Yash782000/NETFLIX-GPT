import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(false);
  const toggleSignInForm = () =>{
    console.log("clicked")
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div className='relative'>
        <Header/>
        <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/12729958-f738-43fb-8053-bdfac26d8130/CA-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4e2c0eba-9120-422a-9fcb-8ed1fbdb43f7_small.jpg" alt="bg"/>
        <form className='absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white bg-opacity-80 rounded-lg'>
          
             <h1 className='text-3xl my-4 font-bold'>{isSignInForm? "Sign Up" : "Sign In"}</h1>
             {isSignInForm && (
            <input type="text" placeholder='Name' className='p-2 my-2 w-full' disabled={true}/>
          )}
             <input type='text' placeholder='Email Address' className='p-2 my-4 w-full ' disabled={true}/>
             <input type="password" placeholder='Password' className='p-2 my-2 w-full' disabled={true}/>
             <button className='p-4 my-6 w-full bg-red-700'>{isSignInForm? "Sign Up" : "Sign In"}</button>
             <p className='py-3 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?"Already Registered ? Sign In Now" : "New to Netflix ? Sign Up"}</p>
          </form>
        
    </div>
  )
}

export default Login