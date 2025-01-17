import React from "react";
import Link from 'next/link' 
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';  
import {BsFillBagCheckFill} from 'react-icons/bs' 

const Checkout = ({cart,subTotal,addToCart,removeFromCart}) => {
  return (
    <div className="container px-8 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
          </div>
        <div className="px-2 w-full">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              id="email"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              cols="30"
              rows="2"
            ></textarea>
            phone 
            state 
            pincode 
        
      </div> 
       
       <div className="mx-auto flex my-4">
      <div className="px-2 w-1/2">
          <div className=" mb-4 ">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>
       <div className="mx-auto flex my-4">
      <div className="px-2 w-1/2">
          <div className=" mb-4 ">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>

        <h2 className="font-semibold text-xl">2.Review cart items & pay</h2>
        <div  className="sideCart  bg-pink-100 p-8 m-2">   {/*ref is use to handle the hold whole div tag */}
          
           
            <ol className='list-decimal font-semibold'>  

            {Object.keys(cart).length==0 && <div className='my-4 font-semibold'>The cart is Empty!</div>} 

            {Object.keys(cart).map((k)=>{
             return <li key={k} >
                <div className='item flex my-5'>
                <div className=' font-semibold'>{cart[k].name} </div> 
                <div className=' flex items-center justify-center w-1/3 text-xl'><AiFillPlusCircle onClick={()=>{addToCart(k,1,499,'Wear the code(XL Red)','XL','Red')} } className='cursor-pointer text-pink-500' /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillMinusCircle onClick={()=>{
                  removeFromCart(k,1,k.price,k.name,k.size,k.variant)}} className='cursor-pointer text-pink-500' /></div> 
                </div>
              </li>
            }) }
            </ol>   
          <span className="font-bold">Subtotal:{subTotal}</span>
     

      </div>  
      <div className="mx-4">

      <Link href={'/checkout'}>
            <button className=" my-3 flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg mt-10 sm:mt-0"><div className='flex space-x-1'><div className='py-1'><BsFillBagCheckFill/></div><div>Pay ₹{subTotal} </div></div></button> 
            </Link>
      </div>
      
      {/* This is end div */}
    </div>
  );
};

export default Checkout;
