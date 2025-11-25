import React from 'react';
import Hero from './sections/Hero';
import ResidentialPlan from './sections/ResidentialPlan';
import MakeDreams from './sections/MakeDreams';
import OurProjects from './sections/OurProjects';
import ClientReviews from './sections/ClientReview';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ResidentialPlan />
      <MakeDreams />
      <OurProjects />
      <ClientReviews />
      <Contact />
    </>
  );
};

export default Home;