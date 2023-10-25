import React, { useState } from 'react';
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import {bigShoe1} from '../assets/images';
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const changeBigShoeImage = (shoe) => {
    setBigShoeImg(shoe);
  };

  return (
    <section id="home" className="w-full min-h-screen max-container flex flex-col xl:flex-row">
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:px-10 pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[52px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red font-bold inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus nostrum repudiandae odit.</p>
        <Button label="Show now" iconURL={arrowRight} />

        <div className="flex w-full justify-start items-start mt-20 flex-wrap gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} width={610} height={500} className="object-contain relative z-10" alt="" />

        <div className="absolute flex gap-4 sm:gap-6 -bottom-[5%] sm:left-[10%]">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
