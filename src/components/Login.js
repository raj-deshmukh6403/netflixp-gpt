import { useState } from 'react';
import Header from './Header';

const Login = () => {
  
  const [IsSignIn,setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
      setIsSignInForm(!IsSignIn)
  }
  
  return (
    <div>
       <Header/>

       <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt='Netflix Background'/>
       </div>
       
       <form className='w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          
          <h1 
          className='font-bold text-3xl py-4 px-2'>
            {IsSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!IsSignIn && <input 
          type='text' 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-[rgba(22,22,22,0.7)] rounded-lg'/>}

          <input 
          type='text' 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-[rgba(22,22,22,0.7)] rounded-lg'/>
          
        
          <input 
          type='password' 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-[rgba(22,22,22,0.7)] rounded-lg'/>

          {!IsSignIn && <input 
          type='password' 
          placeholder='Re-Enter Password' 
          className='p-4 my-4 w-full bg-[rgba(22,22,22,0.7)] rounded-lg'/>}
          
          <button 
          className='bg-red-700 p-3 px-1 my-6 w-full rounded-lg'>{IsSignIn ? "Sign In" : "Sign Up"}</button>
          
          <p className='py-4' onClick={toggleSignInForm}>{IsSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
       </form>

    </div>
  )
}

export default Login
