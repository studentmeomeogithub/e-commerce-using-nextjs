// Cards.tsx
import React from 'react';

interface CardProps {
  backgroundImage: string;
  title: string;
  buttonText: string;
}

const Cards: React.FC<CardProps> = ({ backgroundImage, title, buttonText }) => {
  return (
    <div
      className='w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-md bg-cover bg-center relative overflow-hidden transition-all duration-300 hover:opacity-80'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent hover:bg-opacity-40'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black'>{title}</h2>
        <p className='text-sm sm:text-base md:text-lg text-white hover:cursor-pointer translate-y-full transition-transform duration-300 ease-out hover:translate-y-2'>
          {buttonText}
        </p>
      </div>
    </div>
  );
};

export default Cards;
