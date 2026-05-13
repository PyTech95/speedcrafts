import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Marquee from '../components/Marquee';
import AboutSection from '../components/AboutSection';
import HotProducts from '../components/HotProducts';
import ChairmanMessage from '../components/ChairmanMessage';
import Exhibitions from '../components/Exhibitions';
import MissionQuality from '../components/MissionQuality';
import StatsSection from '../components/StatsSection';
import PageLayout from '../components/PageLayout';

const HomePage = () => {
  return (
    <PageLayout>
      <HeroCarousel />
      <Marquee />
      <AboutSection />
      <HotProducts />
      <ChairmanMessage />
      <Exhibitions />
      <MissionQuality />
      <StatsSection />
    </PageLayout>
  );
};

export default HomePage;
