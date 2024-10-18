import React, { useState } from 'react'
import Link from 'next/link' 
const Signup = () => {  
  let [data,setdata] = useState({name:"", email:"",password:""}) ;
  const handleChange = (e)=>{ 
    setdata({...data,[e.target.name]:e.target.value});

  }
  const  handleClick = async ()=>{ 
    const response = await fetch('/createuser', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }); 
    let value = await response.json(); 
    console.log(value);
       
  }
  return (
    <div>
 
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-20 w-auto" src="codeswearcircle.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for an account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2">
          <input id="email" value={data.name}  onChange={handleChange} placeholder='Enter the name' name="name" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" value={data.email}  onChange={handleChange}  type="email" placeholder='Enter your email address ' autocomplete="email" required className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
           
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" value={data.password} type="password" placeholder='Enter the password' onChange={handleChange} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button onClick={handleClick}type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
       have an account ?
      <Link href={'/login'} className="font-semibold leading-6 text-pink-600 hover:text-pink-500">Login</Link>
    </p>
  </div>
</div>

    </div>
  )
}

export default Signup
