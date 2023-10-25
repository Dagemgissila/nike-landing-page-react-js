

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounde-[20px] shadow-3xl px-10 py-16">
                 <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full">
                    <img src={imgURL} width={24} height={24} alt="" />
                 </div>
                 <h3 className="mt-5 text-3xl">{label}</h3>
                 <p className="mt-3 break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard