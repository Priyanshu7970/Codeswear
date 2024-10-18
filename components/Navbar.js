import React from 'react'
import Image from 'next/image' 
import Link from 'next/link' 
import {useRef,useEffect} from 'react'
// sometimes it happen instantly that a scroll bar is came on whole page body html if you dont want it overflow-x:hidden
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';  
import {BsFillBagCheckFill} from 'react-icons/bs' 
import {MdAccountCircle} from 'react-icons/md' 


 // first two letter like Ai we have to put in 'react-icons/ai'
const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {    
  

  
   const toggleCart = ()=>{
      if(ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
      } 
      else if(!ref.current.classList.contains('translate-x-full')){ 
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')

      }
   } 
   const ref = useRef();
  return (
    <div className='sticky top-0 z-10  bg-white flex flex-col md:flex-row md:justify-start items-center  py-2 shadow-md'> 
     <div className="logo mx-5"> 
     <Link href={'/'} className='cursor-default'> 
     <Image src="/logo2.png" alt="" width={200} height={40} /> 
     
     </Link>
     </div> 
     <div className="nav">
      <ul className="flex  items-center space-x-2 font-bold md:text-xl gap-4">
        <Link href={'/tshirts'}><li>Tshirts</li></Link>
        <Link href={'/hoodies'}><li>Hoodies</li></Link>
        <Link href={'/stickers'}><li>Stickers</li></Link>
        <Link href={'/mugs'}><li>Mugs</li></Link> 
        
      </ul>
     </div> 
   
      <div className="cursor-pointer absolute right-0 top-4 mx-5 flex"> 
       {/* Here we use React icons for Add to card logo */} 
      <Link href={'login'}> <MdAccountCircle  className='  text-xl md:text-2xl mx-7 mt-2 '/> </Link>
        <AiOutlineShoppingCart  onClick={toggleCart}  className='  text-xl md:text-2xl  mt-2'/> 
     </div>  

    { /* <div ref={ref} className={`w-72 sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length!==0?'translate-x-0':'translate-x-full'}`}>   {/*ref is use to handle the hold whole div tag 
            <h2 className='font-bold text-xl text-center'>Shoping Cart </h2>  
            <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle /></span>
            <ol className='list-decimal font-semibold'>  

            {Object.keys(cart).length==0 && <div className='my-4 font-semibold'>The cart is Empty!</div>} 

            {Object.keys(cart).map((k)=>{
             return <li key={k} >
                <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name} </div> 
                <div className=' flex items-center justify-center w-1/3 text-xl'><AiFillPlusCircle onClick={()=>{addToCart(k,1,499,'Wear the code(XL Red)','XL','Red')} } className='cursor-pointer text-pink-500' /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillMinusCircle onClick={()=>{
                  removeFromCart(k,1,k.price,k.name,k.size,k.variant)}} className='cursor-pointer text-pink-500' /></div> 
                </div>
              </li>
            }) 
             }
            
             
              
            </ol>   
            <div className="font-bold my-2">Subtotal:{subTotal}</div>
            <div className='flex space-x-2' > 
            <Link href={'/checkout'}>
            <button className=" my-3 flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg mt-10 sm:mt-0"><div className='flex space-x-1'><div className='py-1'><BsFillBagCheckFill/></div><div>Checkout</div></div></button> 
            </Link>
            <button onClick={clearCart} className="my-3 flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg mt-10 sm:mt-0">Clear cart</button> 
            </div>

      </div> */}
     
              
    </div>
  )
}

export default Navbar
