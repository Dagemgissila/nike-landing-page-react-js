import { products } from "../constants";
const PopularPreviews = () => {
  return (
     <section id="#products" className="max-container w-full ">
         <div className="w-2/5 max-md:w-full">
           <h1 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-coral-red"> Popular </span> Products
           </h1>
           <p className="mt-4 text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicinfuga sed
             iusto odit odio ducimus dicta neque vero veritatis, ut rerum perferendis magnam!</p>

         </div>

         <div className="flex flex-col w-full items-center  md:flex-row   justify-around  mt-20">
                  {
                    products.map((product,index)=>(
                      <div key={product} className="mt-2">
                             <img 
                             src={product.imgURL}
                              alt="" />
                               <div className="mt-1 text-center md:text-left">
                               <p className=" font-bold ">{product.name}</p>
                              <p className="text-coral-red font-bold ">{product.price}</p>
                               </div>
                        </div>
                    ))
                  }
          
         </div>
     </section>
  )
}

export default PopularPreviews