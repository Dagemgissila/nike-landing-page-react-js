import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
     <section id="about-us" className="flex flex-between items-center max-lg:flex-col max-container w-full gap-10">
           <div className="flex flex-1 flex-col ">
         
        <h1 className="text-4xl capitalize mt-10 font-palanquin lg:max-w-lg font-bold">
          we provide you
          <br />
          <span className="text-coral-red font-bold inline-block mt-3">Super quality</span> Shoes
        </h1>
        <p className="mt-4 lg:max-w-lg info-text
        
        ">Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolor sit amet consectetur adipisicing elit.Amet minus nostrum repudiandae odit.</p>
     

                
                    <p className="mt-6 lg:max-w-lg info-text"> dolor sit amet consectetur adiet consectetur adipisicing elit.</p>
                      <div className="mt-11">
                      <Button label="View Detail"  />
                      </div>
           </div>

           <div className="flex flex-1 justify-center items-center">
              <img src={shoe8} alt="" width={570} height={522}  className="object-contain"/>

           </div>
     </section>
  )
}

export default SuperQuality