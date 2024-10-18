import React from "react";
import Product from "../models/Product";  
import mongoose from "mongoose"; 
import Link from "next/link";
const stickers = ({products}) => {  

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4  justify-center">
          { Object.keys(products).map((item)=>{  
 
 //   passhref true mean if you applying link tag to a whole box then you can select whether you want to allow the link tag to use in element or not .
             return <Link passhref="true" key={products[item]._id} href={`/product/${products[item].slug}`}>
           <div className="h-auto lg:w-1/3 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5"> 
                 <section className="flex relative rounded overflow-hidden justify-center ">
                  <img
                   alt="ecommerce"
                   className="m-auto w-auto md:mx-0 h-[30vh] md:h-[36vh] block object-center"
                   src={`${products[item].img}`}
                 /> 
                 </section>
                 <div className="mt-4 text-center md:text-left">
                   <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                     {products[item].category}
                   </h3>
                   <h2 className="title-font text-lg font-medium text-gray-900 ">
                     {products[item].title}
                   </h2> 
                   <p className="mt-1">₹{products[item].price}</p>
                 <div className="mt-1">
                   {products[item].size.includes('S') && <span className="border border-gray-700 mx-1 px-1">S</span>}
                   {products[item].size.includes('M') && <span className="border border-gray-700 mx-1 px-1">M</span>}
                   {products[item].size.includes('L') && <span className="border border-gray-700 mx-1 px-1">L</span>}
                   {products[item].size.includes('XL') && <span className="border border-gray-700 mx-1 px-1">XL</span>}
                   {products[item].size.includes('XXL') && <span className="border border-gray-700 mx-1 px-1">XXL</span>}
                   </div> 
                 <div className="mt-1">
                    {products[item].color.includes('red') &&   <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('blue') &&   <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('green') &&   <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('yellow') &&   <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('black') &&   <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
            
                   </div> 
 
               </div>
             </div> 
             </Link>})}
        
           

        </div>
        </div>
      </section>
    </div>
  );
}; 


 
export async function getServerSideProps(context){
 
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  } 
  let products = await Product.find({category:'mugs'})  
  let tshirts = {}
  for(let item of products){  
      if(item.title in tshirts){ 
          if(!tshirts[item.title].color.includes(item.color) && item.availableQty>0){
              tshirts[item.title].color.push(item.color)
          }
          if(!tshirts[item.title].size.includes(item.size)&&item.availableQty>0){
              tshirts[item.title].size.push(item.size);
          }

      }  

      else{
          tshirts[item.title] = JSON.parse(JSON.stringify(item)) 
          if(item.availableQty>0){
              tshirts[item.title].color = [item.color] ; 
              tshirts[item.title].size = [item.size]; 
          }
      }

  }
  
  return {
    props:{products:JSON.parse(JSON.stringify(tshirts))}
  }
}



export default stickers;
