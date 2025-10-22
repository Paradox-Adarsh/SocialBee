import React from 'react'
import authenticateBg from '../../assets/images/authenticate/authenticate_bg.png'
import Login from './Login'
import Register from './Register'

const Authenticate = () => {
  return (
     <div class="grid grid-cols-1 md:grid-cols-3 min-h-screen">

  <div class="md:col-span-2">
    <img 
      src={authenticateBg}
      alt="Login illustration" 
      class="w-full h-full object-cover"
    />
  </div>

  <div class="flex items-center justify-center bg-bee-yellow">
    <div class="w-full max-w-md bg-bee-yellow-dark shadow-lg rounded-xl p-8">
      <div className="card">

        <div className='flex flex-col items-center space-y-1 mb-5'>
          <h1 className='text-center text-bee-brown text-3xl'>Bee Social</h1>
          <p className="text-center text-sm w-[70%]">Connecting lives , Sharing Stories : Your World</p>
        </div>
        {/* <Login/> */}
        <Register/>
        
        
      </div>
   
    </div>
  </div>
</div>
  )
}

export default Authenticate
