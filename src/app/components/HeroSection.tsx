import React from 'react';
import "./CardAnimation.css";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/imag.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        marginTop: "10vh",
        backgroundColor: "red",
      }}
    >
      <div
        className="font-mono ml-7 w-[80vw] md:w-[50vw]  lg:w-[32vw] h-[40vh] flex flex-col justify-center items-center"
        style={{
          transform: "translate(0%, 20vh)",
        }}
      >
        <h3 className="text-[3vh] md:text-[4vh] text-red-500 animate-fadeInUp">FASHION SALE</h3>
        <h1 className="text-[5vh] md:text-[6vh] animate-fadeInUp delay-200">Minimal Menz Style</h1>
        <p className="w-[80vw]  md:w-[40vw] lg:w-[30vw] mt-3 animate-fadeInUp delay-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni animi dolorum rem in quae sint optio, sapiente libero, quae sint optio, sapiente libero, dolo
        </p>
        <button className="bg-black mr-5 w-[30vw] md:w-[20vw] lg:w-[10vw] hover:bg-white hover:text-black font-semibold text-white rounded-md p-2 flex flex-col justify-center items-center mt-5 transition-colors duration-300 animate-fadeInUp delay-600 hover:border hover:border-black">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
