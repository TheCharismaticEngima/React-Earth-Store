import React from 'react';


import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Testimonials from '../../components/Testimonials/Testimonials';

function Home() {
  return (
    <>
      <div className="home-content">
        <Hero />
        <ProductGrid />
        <Testimonials />
        <Banner />
      </div>
    </>
  )
}

export default Home;