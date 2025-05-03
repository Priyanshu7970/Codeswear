import React from "react";
import Product from "../models/Product";  
import mongoose from "mongoose"; 
import Link from "next/link";
const stickers = ({products}) => {  

  return (
   <div className="container px-5 py-24 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.keys(products).map((item) => (
          <Link
            passHref={true}
            key={products[item]._id}
            href={`/product/${products[item].slug}`}
          >
            <div className="cursor-pointer shadow-lg m-2 border-2 border-gray-400">
              <section className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-72 w-full block object-center"
                  src={`${products[item].img}`}
                />
              </section>
              <div className=" ml-1 mt-4 text-center md:text-left">
                <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  T-shirts
                </h3>
                <h2 className="title-font text-lg font-medium text-gray-900 ">
                  {products[item].title.substring(0,40).concat('...')}
                </h2>
                <p className="mt-1">₹{products[item].price}</p>
                <div className="mt-1">
                  {products[item].size.includes('S') && (
                    <span className="border border-gray-700 mx-1 px-1">S</span>
                  )}
                  {products[item].size.includes('M') && (
                    <span className="border border-gray-700 mx-1 px-1">M</span>
                  )}
                  {products[item].size.includes('L') && (
                    <span className="border border-gray-700 mx-1 px-1">L</span>
                  )}
                  {products[item].size.includes('XL') && (
                    <span className="border border-gray-700 mx-1 px-1">XL</span>
                  )}
                  {products[item].size.includes('XXL') && (
                    <span className="border border-gray-700 mx-1 px-1">XXL</span>
                  )}
                </div>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 


 
export async function getServerSideProps(context){
 
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  } 
  let products = await Product.find({category:'stickers'})  
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
