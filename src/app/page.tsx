import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Cards2 from "./components/Cards2"
import Footer from './components/Footer';
import Testomonial from "./components/Testomonial"

const Page = () => {
  // Array of card data
  const cardData = [
    {
      backgroundImage: '/items1.jpg.webp',
      title: 'Women Fashion',
      buttonText: 'Shop Now',
    },
    {
      backgroundImage: '/items2.jpg.webp',
      title: 'Men Fashion',
      buttonText: 'Explore',
    },
    {
      backgroundImage: '/items3.jpg.webp',
      title: 'Accessories',
      buttonText: 'Discover',
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="flex justify-center items-center flex-wrap gap-8 p-8">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            backgroundImage={card.backgroundImage}
            title={card.title}
            buttonText={card.buttonText}
          />
        ))}
        <Cards2/>
      </div>
      <Testomonial/>
      <Footer/>
    </div>
  );
};

export default Page;
